import { RuleTester } from "@typescript-eslint/utils/dist/ts-eslint";
import { it } from "vitest";
import type { TSESLint } from "@typescript-eslint/utils";
import rule, { RULE_NAME } from "./custom-sort-keys";
import type { MessageIds, Options } from "./custom-sort-keys";

const valids: TSESLint.ValidTestCase<Options>[] = [
  {
    code: "const a = {a:1,b:2,c:3}",
  },
  {
    code: "const a = {b:1,a:2,c:3}",
  },
  {
    code: "const a = {b:1,a:2,c:3}",
    options: [{ orderedKeys: ["b"] }],
  },
  {
    code: "const a = {b:1,a:2,c:3}",
    options: [{ orderedKeys: ["b", "a"] }],
  },
  {
    code: `const test ={
    async update({ name, password, username }: { name: string; password: { new: string; old: string }; username: string }) {
    }
};`,
  },
];
const invalids: TSESLint.InvalidTestCase<MessageIds, Options>[] = [
  {
    code: "const a = {a:1,b:2,c:3}",
    errors: [{ messageId: "object-keys-error" }],
    options: [{ orderedKeys: ["b", "a"] }],
    output: "const a = {b:2,a:1,c:3}",
  },
];

it("runs", () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid: valids,
    invalid: invalids,
  });
});
