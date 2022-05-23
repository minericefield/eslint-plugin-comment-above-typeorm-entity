import { TSESLint } from "@typescript-eslint/experimental-utils";

export const commentAboveTypeORMEntity: TSESLint.RuleModule<
  "commentRequirement",
  []
> = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Check if there is a comment above the typeorm entity.",
      recommended: "warn",
    },
    messages: {
      commentRequirement:
        "Add a comment above the entity to describe the table.",
    },
    schema: [],
  },
  create: (context) => {
    const allComments = context.getSourceCode().getAllComments();
    const allCommentsStartLines = allComments.map(
      (comment) => comment.loc.start.line
    );
    const allCommentsEndLines = allComments.map(
      (comment) => comment.loc.end.line
    );

    return {
      Decorator(node) {
        if ((node.expression as unknown as any)?.callee?.name === "Entity") {
          const lineNumberJustAboveTheStartOfEntity = node.loc.start.line - 1;
          const lineNumberJustBelowTheStartOfEntity = node.loc.end.line + 1;

          const doesCommentAboveTheStartOfEntityExist =
            allCommentsEndLines.includes(lineNumberJustAboveTheStartOfEntity);
          const doesCommentBelowTheEndOfEntityExist =
            allCommentsStartLines.includes(lineNumberJustBelowTheStartOfEntity);

          if (
            !doesCommentAboveTheStartOfEntityExist &&
            !doesCommentBelowTheEndOfEntityExist
          ) {
            context.report({
              node,
              messageId: "commentRequirement",
            });
          }
        }
      },
    };
  },
};
