import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers as equipResolver } from "./typedefs-resolvers/equipments.js";
import { resolvers as supplyResolver } from "./typedefs-resolvers/supplies.js";

const schemaFolderPath = path.join(process.cwd(), "schema");
const typeDefsFiles = readdirSync(schemaFolderPath, "utf-8");

const typeDefs = await Promise.all(
  typeDefsFiles.map((typeDefsFile) =>
    fileReader(`${schemaFolderPath}/${typeDefsFile}`)
  )
);

const server = new ApolloServer({
  typeDefs,
  resolvers: [equipResolver, supplyResolver],
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);

function fileReader(filePath: string) {
  return readFile(filePath, { encoding: "utf-8" });
}
