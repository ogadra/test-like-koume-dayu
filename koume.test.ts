import { expect, test } from "vitest";

test("toBeLikeKomeDayu", () => {
  expect(1).toBeLikeKomeDayu(2);
});

test("toBeLikeKomeDayu not", () => {
  expect(1).not.toBeLikeKomeDayu(1);
});
