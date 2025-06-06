import sum from "../sum";

test("Sum function should return sum of two numbers", () => {
  const result = sum(5, 6);

  //Assertion
  expect(result).toBe(11);
});
