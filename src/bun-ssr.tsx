import { serve } from "bun";
import { renderToString } from "react-dom/server";

const port = 3000;
serve({
	async fetch(req) {
		return new Response(
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
			{
				headers: {
					"Content-Type": "text/html",
				},
			},
		);
	},
	port,
});

console.log(`Server is running on http://localhost:${port}`);
