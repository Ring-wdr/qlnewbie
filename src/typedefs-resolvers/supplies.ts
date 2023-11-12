import { dbWorks } from "../dbWorks.js";
import type { Resolvers } from "../resolvers-types.js";

export const resolvers: Resolvers = {
  Query: {
    supplies: (parent, args) => dbWorks.getSupplies(args),
  },
  Mutation: {
    deleteSupply: (parent, args) => dbWorks.deleteItem("supplies", args),
  },
};
