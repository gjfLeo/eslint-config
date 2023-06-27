import genericSpacing from "./rules/generic-spacing";
import ifNewline from "./rules/if-newline";
import importDedupe from "./rules/import-dedupe";
import preferInlineTypeImport from "./rules/prefer-inline-type-import";
import topLevelFunction from "./rules/top-level-function";
import noTsExportEqual from "./rules/no-ts-export-equal";
import noCjsExports from "./rules/no-cjs-exports";
import customSortKeys from "./rules/custom-sort-keys";

export default {
  rules: {
    "if-newline": ifNewline,
    "import-dedupe": importDedupe,
    "prefer-inline-type-import": preferInlineTypeImport,
    "generic-spacing": genericSpacing,
    "top-level-function": topLevelFunction,
    "no-cjs-exports": noCjsExports,
    "no-ts-export-equal": noTsExportEqual,
    "custom-sort-keys": customSortKeys,
  },
};
