import { resolve } from "path";

import { TSESLint } from "@typescript-eslint/experimental-utils";
import fs from "fs-extra";

import { commentAboveTypeORMEntity } from "../rules/comment-above-typeorm-entity";

const ruleName = "comment-above-typeorm-entity";
const tester = new TSESLint.RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
});

const validFileNames = fs.readdirSync(resolve(__dirname, "./data/valid"));
const invalidFileNames = fs.readdirSync(resolve(__dirname, "./data/invalid"));

describe("test", () => {
  tester.run(ruleName, commentAboveTypeORMEntity, {
    valid: validFileNames.map((validFileName) => {
      return {
        code: fs.readFileSync(
          resolve(__dirname, "./data/valid", validFileName),
          "utf-8"
        ),
      };
    }),
    invalid: invalidFileNames.map((inValidFileName) => {
      return {
        code: fs.readFileSync(
          resolve(__dirname, "./data/invalid", inValidFileName),
          "utf-8"
        ),
        errors: [{ messageId: "commentRequirement" }],
      };
    }),
  });
});
