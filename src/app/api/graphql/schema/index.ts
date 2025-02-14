import { gql } from "graphql-tag";
import prisma from "@/shared/lib/prisma";

export const typeDefs = gql`
  type Query {
    getAllGenres: [Genre]
  }

  type Genre {
    id: ID!
    name: String!
    description: String
    imageUrl: String
  }
`;

export const resolvers = {
  Query: {
    getAllGenres: async () => {
      return await prisma.genre.findMany();
    },
  },
};
