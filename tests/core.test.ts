import { processEvent } from "../src/core";

test("processEvent returns formatted string", () => {
  const result = processEvent("test");
  expect(result).toContain("test");
});