import Vershy from "./index.js";

export default function(token, options) {
    return new Vershy.Client(token, options);
};

export const {
    Client,
    Handler,
    Listener,
    ListenerHandler,
    Util,
    VershyHandler,
    Version
} = Vershy;