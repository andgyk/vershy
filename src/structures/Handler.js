"use strict";

class VershyHandler {
    constructor (client, path) {
        /**
         * The path to the directory
         * @type {string}
         */
        this.path = path;

        /**
         * The Eris client
         * @type {Eris}
         */
        this.client = client;
    };
};

module.exports = VershyHandler;