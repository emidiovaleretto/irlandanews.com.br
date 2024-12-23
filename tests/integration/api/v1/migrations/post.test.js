import database from "infra/database";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.clearDatabase();
});

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Retrieving pending migrations", () => {
      test("when running for the first time should return 201", async () => {
        const response1 = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "POST",
          },
        );

        const response1Body = await response1.json();
        expect(response1.status).toBe(201);
        expect(Array.isArray(response1Body)).toBe(true);
        expect(response1Body.length).toBeGreaterThanOrEqual(1);
      });

      test("when running for the second time should return 200", async () => {
        const response2 = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "POST",
          },
        );

        const response2Body = await response2.json();
        expect(response2.status).toBe(200);
        expect(Array.isArray(response2Body)).toBe(true);
        expect(response2Body.length).toBe(0);
      });
    });
  });
});
