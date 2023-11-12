import { dbWorks } from "../dbWorks.js";

export const typeDefs = `#graphql
    type Supply {
        id: String
        team: Int
    }
`;
export const resolvers = {
  Query: {
    supplies: (parent, args) => dbWorks.getSupplies(args),
  },
  Mutation: {
    deleteSupply: (parent, args) => dbWorks.deleteItem("supplies", args),
  },
};
