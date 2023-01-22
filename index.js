const http = require("http");
const host = "localhost";
const port = 3333;
console.log("heloo node");

const produtos = require("./produtos.json");

function tratamentoProdutos(req, res) {
	if (req.method === "GET") {
		res.end(JSON.stringify(produtos));
	} else {
		res.end("sem suporte");
	}
}

const requestListener = function (req, res) {
	req.url === "/"
		? res.end("home paige")
		: req.url === "/produtos"
		? res.end(tratamentoProdutos(req, res))
		: res.end("desconhecido");
};

//NOTE - exemplo de paginação e utilização de methodos de manipulação de string para tal
// const requestListener = function (req, res) {
// 	console.log("req.url", req.url);
// 	req.url === "/"
// 		? res.end("<h1>main page</h1>")
// 		: req.url === "/araujo"
// 		? res.end("<h1>Araujo page</h1>")
// 		: req.url.indexOf("/v1/") === 0
// 		? res.end(req.url.substring(4))
// 		: res.end("<h1>Desconhecido</h1>");
// };

const server = http.createServer(requestListener);
server.listen(port, host);
