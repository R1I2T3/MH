import handler from "../../../src/pages/api/query";
import { createMocks } from "node-mocks-http";

describe("/api/query", () => {
  test("returns insights on POST", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        query: "AAPL",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.insights).toHaveLength(2);
  });
});
