import { dbWorks } from "../dbWorks.js";

export const typeDefs = `#graphql
    type Equipment {
        id: String
        used_by: String
        count: Int
        new_or_used: String
    }
`;
export const resolvers = {
  Query: {
    equipments: (parent, args) => dbWorks.getEquipments(args),
  },
  Mutation: {
    deleteEquipment: (parent, args) => dbWorks.deleteItem("equipments", args),
  },
};
