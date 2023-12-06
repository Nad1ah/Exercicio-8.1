import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { fetchData } from "../app";

describe("fetchData", () => {
  describe("o fecth funciona bem", () => {
    const expectedResult = [{ id: 1, price: 30 }];

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: jest.fn(() => Promise.resolve(expectedResult)),
        })
      );
    });

    test("recebe resultado esperado", async () => {
      const result = await fetchData();

      expect(result).toBe(expectedResult);
    });
  });

  describe("o fecth funciona mal", () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.reject(new Error("fetch falhou")));
    });

    test("dá erro", () => {
      expect(async () => await fetchData()).rejects.toThrow();
    });
  });
});

describe("o fecth funciona bem mas o meu resultado não é json", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn(() => Promise.reject(new Error("jsonfalhou"))),
      })
    );
  });
});

test("dá erro", () => {
  expect(async () => await fetchData()).rejects.toThrow();
});
