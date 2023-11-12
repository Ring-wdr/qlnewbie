export const typeDefs = `#graphql
    type Mutation {
      deleteEquipment(id: String): Equipment
      deleteSupply(id: String): Supply
    }
`;
