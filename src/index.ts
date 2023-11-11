import { database } from "./database.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    teams: [Team]
    team(id: Int): Team
    people: [People]
    equipments: [Equipment]
    supplies: [Supply]
  }
  type Mutation{
    insertEquip(
      id: String
      used_by: String
      count: Int
      new_or_used: String
    ): Equipment
   deleteEquip(id: String): Equipment 
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  type Equipment{
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
  type People{
    id: Int
    first_name: String
    last_name: String
    sex: String
    blood_type: String
    serve_years: Int
    role: String
    team: Int
    from: String
  }
  type Supply {
    id: String,
    team: Int
  }
`;
const resolvers = {
  Query: {
    teams: () =>
      database.teams.map((team) => {
        team.supplies = database.supplies.filter(
          (supply) => supply.team === team.id
        );
        return team;
      }),
    team: (parent, args, context, info) =>
      database.teams.filter((team) => team.id === args.id)[0],
    people: () => database.people,
    equipments: () => database.equipments,
    supplies: () => database.supplies,
  },
  Mutation: {
    insertEquip: (parent, args) => (database.equipments.push(args), args),
    deleteEquip: (parent, args, context, info) => {
      const [deleted] = database.equipments.filter(
        (equip) => equip.id === args.id
      );
      database.equipments = database.equipments.filter(
        (equip) => equip.id !== args.id
      );
      return deleted;
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
