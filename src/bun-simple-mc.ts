import { serve } from "bun";
import cluster from "node:cluster";
import os from "node:os";

const numCPUs = os.cpus().length;
const port = 3000;

if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`);

	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died`);
		cluster.fork();
	});

	console.log(`Server is running on http://localhost:${port}`);
} else {
	serve({
		fetch(req) {
			return new Response("Hello world!");
		},
		port,
	});

	console.log(`Worker ${process.pid} started`);
}
