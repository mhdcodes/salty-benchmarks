import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { renderToString } from "react-dom/server";

const app = new Hono();
app.get("/", async (c) => {
	return c.html(
		renderToString(
			<html lang="en">
				<head>
					<title>Hello from React</title>
				</head>
				<body>
					<h1>Hello from react</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
						dignissimos id beatae delectus incidunt quae voluptatem
						exercitationem sequi minus. Temporibus mollitia similique dolorem
						iste, explicabo adipisci nam dolore sequi consequatur?
					</p>
				</body>
			</html>,
		),
	);
});

const port = 3000;
serve({
	fetch: app.fetch,
	port,
});

console.log(`Server is running on http://localhost:${port}`);
