"use strict";

const Client = require("./src/Client");

function Vershy (token, options) {
    return new Client(token, options);
};

Vershy.Client = Client;
Vershy.Util = require("./src/Util");
Vershy.Handler = require("./src/structures/Handler");
Vershy.Listener = require("./src/structures/Listener");
Vershy.ListenerHandler = require("./src/structures/handlers/ListenerHandler");
Vershy.Version = require("./package.json").version;
Vershy.VershyHandler = require("./src/structures/Handler");
Vershy.Vershy = Client;

module.exports = Vershy;