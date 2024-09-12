import { serve } from "bun";
import { Database } from "bun:sqlite";

const db = new Database("database.sqlite", { readonly: true });
const port = 3000;

serve({
	fetch(req) {
		const query = db.query("select * from posts");
		return Response.json(query.all());
	},
	port,
});

console.log(`Server is running on http://localhost:${port}`);
