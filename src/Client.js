"use strict";

const { Client } = require("eris");

class Vershy extends Client {
    constructor (token, options = {}) {
        super(token, options);
    };
};

module.exports = Vershy;