import { commentAboveTypeORMEntity } from "./rules/comment-above-typeorm-entity";

export = {
  rules: {
    "comment-requirement": commentAboveTypeORMEntity,
  },
  configs: {
    all: {
      plugins: ["eslint-plugin-comment-above-typeorm-entity"],
      rules: {
        "eslint-plugin-comment-above-typeorm-entity": "warn",
      },
    },
  },
};
