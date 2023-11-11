declare module "convert-csv-to-json" {
  class csvToJson {
    formatValueByType(active?: boolean): this;
    supportQuotedField(active?: boolean): this;
    fieldDelimiter(delimiter: string): this;
    getJsonFromCsv(fileInputName: string): ReturnType<typeof this.csvToJson>;
    csvToJson(parsedCsv: string): string[];
  }
  const inst: csvToJson;
  export = inst;
}
