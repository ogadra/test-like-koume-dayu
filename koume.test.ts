import { expect, test } from "vitest";

test("toBe", () => {
  expect(1).toBe(2);
});

test("toBe not", () => {
  expect(1).not.toBe(1);
});

test("toEqual", () => {
  expect({ a: 1 }).toEqual({ a: 2 });
});

test("toEqual not", () => {
  expect({ a: 1 }).not.toEqual({ a: 1 });
});

test("toBeNull", () => {
  expect(1).toBeNull();
});

test("toBeNull not", () => {
  expect(null).not.toBeNull();
});

test("toBeTruthy", () => {
  expect(false).toBeTruthy();
});

test("toBeTruthy not", () => {
  expect(true).not.toBeTruthy();
});

test("toBeFalsy", () => {
  expect(true).toBeFalsy();
});

test("toBeFalsy not", () => {
  expect(false).not.toBeFalsy();
});

test("toContain", () => {
  expect(["a", "b", "c"]).toContain("d");
});

test("toContain not", () => {
  expect(["a", "b", "c"]).not.toContain("a");
});

test("toThrow", () => {
  expect(() => {
    return;
  }).toThrow();
});

test("toThrow not", () => {
  expect(() => {
    throw new Error();
  }).not.toThrow();
});

test("CustomError", () => {
  class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "CustomError";
    }
  }

  expect(() => {
    throw new Error("一般的なエラー");
  }).toThrow(new CustomError("特定のエラー"));
});
