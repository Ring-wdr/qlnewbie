import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs as queries } from "./typedefs-resolvers/_queries.js";
import { typeDefs as mutations } from "./typedefs-resolvers/_mutations.js";
import {
  typeDefs as equipments,
  resolvers as equipResolver,
} from "./typedefs-resolvers/equipments.js";
import {
  typeDefs as supplies,
  resolvers as supplyResolver,
} from "./typedefs-resolvers/supplies.js";

const typeDefs = [queries, mutations, equipments, supplies];
const server = new ApolloServer({
  typeDefs,
  resolvers: [equipResolver, supplyResolver],
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
