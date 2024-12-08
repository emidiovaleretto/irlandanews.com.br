import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(request.method)) {
    return response
      .json({
        error: "Method not allowed",
      })
      .status(405)
      .end();
  }
  const dbClient = await database.getNewClient();
  const defaultMigrations = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };
  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrations);
    dbClient.end();
    return response.status(200).json(pendingMigrations);
  }
  if (request.method == "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrations,
      dryRun: false,
    });

    dbClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }
  }
  return response.status(405).end();
}
