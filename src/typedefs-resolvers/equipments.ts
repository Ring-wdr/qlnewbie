import { dbWorks } from "../dbWorks.js";
import type { Resolvers } from "../resolvers-types.js";

export const resolvers: Resolvers = {
  Query: {
    equipments: (parent, args) => dbWorks.getEquipments(args),
  },
  Mutation: {
    deleteEquipment: (parent, args) => dbWorks.deleteItem("equipments", args),
  },
};
