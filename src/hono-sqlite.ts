import { serve } from "@hono/node-server";
import Database from "better-sqlite3";
import { Hono } from "hono";

const app = new Hono();

const db = new Database("database.sqlite", {});

app.get("/", (c) => {
	const result = db.prepare("SELECT * FROM posts").all();

	return c.json(result);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});
