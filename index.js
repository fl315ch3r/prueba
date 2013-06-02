var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
/*
var handle {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload; 
*/
var handle {
	"/":requestHandlers.start;
	"/iniciar":requestHandlers.start;
	"/subir":requestHandlers.upload;
};
server.start(router.route, handle);
