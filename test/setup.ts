import { expect } from "vitest";

expect.extend({
  toBeLikeKomeDayu(received, expected) {
    const { isNot } = this;
    return {
      pass: received === expected,
      message: () =>
        `${expected}${
          isNot ? "ではない" : ""
        }かと思ったら～、${received} でした～。チクショー！！`,
    };
  },
});

interface CustomMatchers<R = unknown, T = unknown> {
  toBeLikeKomeDayu: (expected: T) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
