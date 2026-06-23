import type { StylisticConfig } from "@antfu/eslint-config";
import antfu, { jsonc } from "@antfu/eslint-config";
import { isPackageExists } from "local-pkg";

export default function gjfleo(
  config: Parameters<typeof antfu>[0] = {},
  ...userConfigs: Parameters<typeof antfu>[1][]
): ReturnType<typeof antfu> {
  const stylisticConfig: StylisticConfig = {
    quotes: "double",
    semi: true,
  };

  return antfu(
    {
      stylistic: {
        ...stylisticConfig,
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
    jsonc({
      files: ["bun.lock"],
      overrides: {
        "jsonc/comma-dangle": ["warn", "always-multiline"],
      },
      stylistic: stylisticConfig,
    }),

    ...userConfigs,
  );
}
