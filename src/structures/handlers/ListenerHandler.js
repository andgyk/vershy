"use strict";

const VershyHandler = require("../Handler");
const Util = require("../../Util");

class ListenerHandler extends VershyHandler {
    constructor (client, path) {
        super(client, path);
    };

    listen (path = this.path) {
        const listeners = Util.readDirFiles(path);

        for (let i = 0; i < listeners.length; i++) {
            let listener = require(listeners[i]);
            // Add Prototypes
            listener.prototype.client = this.client;

            let li = new listener();
            let type = this.client;
            if (li.type === "process") type = process;

            if (li.name) {
                if (Boolean(li.once)) {
                    type.once(li.name, (...args) => li.exec(...args));
                } else {
                    type.on(li.name, (...args) => li.exec(...args));
                };
            };
        };
    };
};

module.exports = ListenerHandler;