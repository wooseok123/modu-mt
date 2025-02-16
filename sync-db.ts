import { Music } from "@prisma/client";
import musicsData from "./music.json";
import { execSync } from "child_process";
import prisma from "./src/shared/lib/prisma";

async function syncDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL이 설정되지 않았습니다.");
    process.exit(1);
  }

  try {
    const { current, previous } = getGitChanges();

    // 추가된 항목 찾기
    const added = current.filter(
      (item) => !previous.some((prevItem) => prevItem.id === item.id),
    );

    // 삭제된 항목 찾기
    const deleted = previous.filter(
      (item) => !current.some((currItem) => currItem.id === item.id),
    );

    // 수정된 항목 찾기
    const modified = current.filter((item) => {
      const prevItem = previous.find((p) => p.id === item.id);
      return prevItem && JSON.stringify(item) !== JSON.stringify(prevItem);
    });

    // 변경사항 적용
    if (deleted.length > 0) {
      await prisma.music.deleteMany({
        where: { id: { in: deleted.map((item) => item.id) } },
      });
      console.log(`${deleted.length}개 항목 삭제됨`);
    }

    if (added.length > 0) {
      // Get existing genres and artists
      const existingGenres = await prisma.genre.findMany();
      const existingArtists = await prisma.artist.findMany();

      // Process each added music item
      for (const music of added) {
        // Check and create genre if it doesn't exist
        const genre = existingGenres.find((g) => g.name === music.genreName);
        if (!genre) {
          await prisma.genre.create({
            data: { name: music.genreName },
          });
        }

        // Check and create artist if it doesn't exist
        const artist = existingArtists.find((a) => a.name === music.artistName);
        if (!artist) {
          await prisma.artist.create({
            data: { name: music.artistName },
          });
        }
      }

      // Create the music entries
      await prisma.music.createMany({
        data: added,
        skipDuplicates: true,
      });
      console.log(`${added.length}개 항목 추가됨`);
    }

    if (modified.length > 0) {
      for (const item of modified) {
        await prisma.music.update({
          where: { id: item.id },
          data: item,
        });
      }
      console.log(`${modified.length}개 항목 수정됨`);
    }
    console.log("데이터베이스 동기화 완료");

    const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL;
    if (!NEXT_PUBLIC_APP_URL) {
      throw new Error("NEXT_PUBLIC_APP_URL이 설정되지 않았습니다.");
    }

    const revalidateResponse = await fetch(
      `${NEXT_PUBLIC_APP_URL}/api/revalidate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.REVALIDATE_SECRET,
          paths: ["/", "/musics"],
        }),
      },
    );

    if (!revalidateResponse.ok) {
      throw new Error("Revalidation failed");
    }

    console.log("캐시 무효화 완료");
  } catch (error) {
    console.error("Error syncing database:", error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

syncDatabase();

function getGitChanges(): { current: Music[]; previous: Music[] } {
  try {
    // 현재 커밋의 music.json 내용 가져오기
    const currentData = musicsData.musics;

    // 이전 커밋의 music.json 내용 가져오기
    const previousCommitHash = execSync("git rev-parse HEAD~1")
      .toString()
      .trim();
    const previousFileContent = execSync(
      `git show ${previousCommitHash}:./music.json`,
    ).toString();
    const previousData = JSON.parse(previousFileContent).musics;

    return { current: currentData, previous: previousData };
  } catch (error) {
    console.error("Git 변경사항 확인 중 에러:", error);
    process.exit(1);
  }
}
