import csvToJson from "convert-csv-to-json";
import { Query } from "./resolvers-types";

export const database: Query = {
  teams: [],
  people: [],
  roles: [],
  softwares: [],
  equipments: [],
  supplies: [],
};
Object.keys(database).forEach((key) => {
  database[key] = [
    ...database[key],
    ...csvToJson.fieldDelimiter(",").getJsonFromCsv(`./data-in-csv/${key}.csv`),
  ];
  if (database[key].length > 0) {
    const firstItem = database[key][0];
    Object.keys(firstItem).forEach((itemKey) => {
      if (
        database[key].every((item) => {
          return /^-?\d+$/.test(item[itemKey]);
        })
      ) {
        database[key].forEach((item) => {
          item[itemKey] = Number(item[itemKey]);
        });
      }
    });
  }
});
