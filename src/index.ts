import antfu from "@antfu/eslint-config";
import { isPackageExists } from "local-pkg";

export default function gjfleo(
  config: Parameters<typeof antfu>[0],
  ...userConfigs: Parameters<typeof antfu>[1][]
): ReturnType<typeof antfu> {
  return antfu(
    {
      stylistic: {
        quotes: "double",
        semi: true,
        overrides: {
          "antfu/if-newline": "off",
          "curly": ["warn", "multi-line", "consistent"],
          "style/member-delimiter-style": "warn",
          "style/quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: "avoidEscape" }],
        },
      },

      javascript: {
        overrides: {
          "no-console": ["warn", { allow: ["info", "warn", "error"] }],
          "no-irregular-whitespace": ["warn", { skipStrings: true, skipTemplates: true }],
          "node/prefer-global/process": ["warn", "always"],
          "antfu/no-top-level-await": "off",
        },
      },

      vue: {
        overrides: {
          "vue/block-order": ["warn", { order: ["template", "script", "style"] }],
          "vue/html-self-closing": ["warn", { html: { void: "always", normal: "always", component: "always" }, svg: "always", math: "always" }],
          "vue/singleline-html-element-content-newline": "off",
        },
      },

      react: isPackageExists("react"),
      unocss: isPackageExists("@unocss/eslint-plugin"),

      formatters: {
        css: true,
        html: true,
        markdown: true,
      },

      ...config,
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
