import antfu from "@antfu/eslint-config";
import { isPackageExists } from "local-pkg";

export default function gjfleo(...userConfigs: Parameters<typeof antfu>[1][]): ReturnType<typeof antfu> {
  return antfu(
    {
      stylistic: {
        quotes: "double",
        semi: true,
        overrides: {
          "antfu/if-newline": "off",
          "curly": ["warn", "multi-line", "consistent"],
          "style/member-delimiter-style": ["error", {}],
          "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
        },
      },

      javascript: {
        overrides: {
          "no-console": ["warn", { allow: ["warn", "error"] }],
          "no-irregular-whitespace": ["warn", { skipStrings: true, skipTemplates: true }],
          "node/prefer-global/process": ["warn", "always"],
        },
      },
      typescript: {
        overrides: {
          "node/prefer-global/process": ["warn", "always"],
        },
      },

      vue: {
        overrides: {
          "vue/block-order": ["warn", { order: ["template", "script", "style"] }],
          "vue/html-self-closing": ["warn", { html: { void: "always", normal: "always", component: "always" }, svg: "always", math: "always" }],
          "vue/singleline-html-element-content-newline": "off",
        },
      },

      unocss: isPackageExists("@unocss/eslint-plugin"),

      formatters: {
        css: true,
        html: true,
        markdown: true,
      },
    },

    {
      files: [".vscode/settings.json", ".vscode/extensions.json"],
      rules: {
        "jsonc/comma-dangle": ["warn", "always-multiline"],
      },
    },

    ...userConfigs,
  );
}
