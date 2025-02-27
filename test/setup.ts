import { expect } from "vitest";

expect.extend({
  toBe(received, expected) {
    const { isNot, utils } = this;
    return {
      pass: received === expected,
      message: () =>
        `${utils.matcherHint("toBe", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャンチャンチャンチャン
チャンチャカチャンチャンチャンチャンチャンチャン

${utils.printExpected(expected)} ${isNot ? "ではない" : ""}かと思ったら～、

${utils.printReceived(received)} でした～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      expected,
      received,
    };
  },

  toEqual(received, expected) {
    const { isNot, utils } = this;
    return {
      pass: this.equals(received, expected),
      message: () =>
        `${utils.matcherHint("toEqual", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャチャンチャチャンチャン
チャンチャカチャンチャンチャチャンチャチャンチャン

${utils.printExpected(expected)} と一致${
          isNot ? "しない" : "する"
        }かと思ったら～、

${utils.printReceived(received)} でした～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      expected,
      received,
    };
  },

  toBeNull(received) {
    const { isNot, utils } = this;
    return {
      pass: received === null,
      message: () =>
        `${utils.matcherHint("toBeNull", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャチャンチャチャンチャン
チャンチャカチャンチャンチャチャンチャチャンチャン

${utils.printExpected(null)} ${isNot ? "ではない" : ""}かと思ったら～、

${utils.printReceived(received)} でした～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      expected: null,
      received,
    };
  },

  toBeTruthy(received) {
    const { isNot, utils } = this;
    return {
      pass: !!received,
      message: () =>
        `${utils.matcherHint("toBeTruthy", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャチャンチャチャンチャン
チャンチャカチャンチャンチャチャンチャチャンチャン

${utils.printExpected(true)} ${isNot ? "ではない" : ""}かと思ったら～、

${utils.printReceived(received)} でした～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      received,
    };
  },

  toBeFalsy(received) {
    const { isNot, utils } = this;
    return {
      pass: !received,
      message: () =>
        `${utils.matcherHint("toBeFalsy", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャチャンチャチャンチャン
チャンチャカチャンチャンチャチャンチャチャンチャン

${utils.printExpected(false)} ${isNot ? "ではない" : ""}かと思ったら～、

${utils.printReceived(received)} でした～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      received,
    };
  },

  toContain(received, expected) {
    const { isNot, utils } = this;
    const pass =
      Array.isArray(received) || typeof received === "string"
        ? received.includes(expected)
        : false;

    return {
      pass,
      message: () =>
        `${utils.matcherHint("toContain", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャチャンチャチャンチャン
チャンチャカチャンチャンチャチャンチャチャンチャン

${utils.printExpected(expected)} ${
          isNot ? "を含まない" : "を含む"
        }かと思ったら～、

${utils.printReceived(received)} でした～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      expected,
      received,
    };
  },

  toThrow(received, expected) {
    const { isNot, utils } = this;

    if (typeof received !== "function") {
      throw new Error(
        `${utils.RECEIVED_COLOR(
          "received"
        )} 値は関数でなければなりません。受け取った値: ${utils.printReceived(
          received
        )}`
      );
    }

    let thrown = false;
    let error;

    try {
      received();
    } catch (e) {
      thrown = true;
      error = e;
    }

    const pass =
      thrown && (expected === undefined || this.equals(error, expected));

    return {
      pass,
      message: () =>
        `${utils.matcherHint("toThrow", undefined, undefined, {
          isNot,
        })}

チャンチャカチャンチャンチャチャンチャチャンチャン
チャンチャカチャンチャンチャチャンチャチャンチャン

${
  expected ? utils.printExpected(expected) + "のエラーが" : "エラーが"
}投げられ${isNot ? "ない" : "る"}かと思ったら～、

${
  thrown
    ? `${utils.printReceived(error)}が投げられました`
    : "何も起きませんでした"
} ～。

${utils.BOLD_WEIGHT("チクショー！！")}
`,
      expected,
      received,
    };
  },
});

interface CustomMatchers<R = unknown, T = unknown> {
  toBe: (expected: T) => R;
  toEqual: (expected: T) => R;
  toBeNull: () => R;
  toBeTruthy: () => R;
  toBeFalsy: () => R;
  toContain: (expected: any) => R;
  toThrow: (expected?: any) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
