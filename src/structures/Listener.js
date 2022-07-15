"use strict";

class Listener {
    constructor (options = {}) {
        const { name, once = false, type = "client" } = options;

        if (!name) {
            throw new TypeError("A listener file missing the name");
        };

        /**
         * The name of the event
         * @type {string}
         */
        this.name = name;

        /**
         * Whether to add one time listener function
         * @type {boolean} default: false
         */
        this.once = once;

        /**
         * The type of the listener (process or client)
         * default: client
         * @type {string}
         */
        this.type = type;
    };

    /**
     * This method will be called on listener emitting
     * @param  {...any} args The parameters of the listeners
     */
    exec (...args) {
        throw new Error(`No exec code was written for ${this.name} listeners`);
    };
};

module.exports = Listener;