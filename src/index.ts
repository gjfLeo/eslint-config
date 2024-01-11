import antfu from "@antfu/eslint-config";

interface Config {
  unocss?: boolean;
}

export default function gjfleo(config?: Config, ...userConfigs: Parameters<typeof antfu>[1][]) {
  return antfu(
    {
      stylistic: {
        quotes: "double",
        semi: true,
        // @ts-expect-error 等待修复
        overrides: {
          "antfu/if-newline": "off",
          "curly": ["warn", "multi-line", "consistent"],
          "style/member-delimiter-style": ["error", {}],
          "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
        },
      },

      typescript: {
        overrides: {
          "node/prefer-global/process": ["error", "always"],
        },
      },

      vue: {
        overrides: {
          "vue/block-order": ["error", {}],
          "vue/html-self-closing": ["warn", { html: { void: "always", normal: "always", component: "always" }, svg: "always", math: "always" }],
          "vue/singleline-html-element-content-newline": "off",
        },
      },

      unocss: config?.unocss,
    },

    {
      files: [".vscode/*.json"],
      rules: {
        "jsonc/comma-dangle": ["error", "always-multiline"],
      },
    },

    ...userConfigs,
  );
}
