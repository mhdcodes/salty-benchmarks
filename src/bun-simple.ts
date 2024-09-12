import { serve } from "bun";

const port = 3000;

serve({
	fetch(req) {
		return new Response("Hello world!");
	},
	port,
});

console.log(`Server is running on http://localhost:${port}`);
