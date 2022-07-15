import Eris from "eris";

declare function Vershy (token: string, options?: Vershy.ClientOptions): Vershy.Client;

declare namespace Vershy {
    export const Version: string;

    // Classes
    export class Client extends Eris.Client {
        public constructor (token: string, options?: ClientOptions);
    }

    export class Vershy extends Client {}

    export class Handler {
        public path: string;
        public constructor (client: Client, path: string);
    }

    export class Listener {
        public client: Client;
        public name: string;
        public once?: boolean;
        public type?: "process" | "client";
        public constructor (options: ListenerOptions);
        public exec (...args: any[]): any;
    }

    export class ListenerHandler extends Handler {
        public constructor (client: Client, path: string);
        public listen (path?: string): void;
    }

    export class Util {
        public static readDirFiles (path: string, arr: string[], ext: string): string[];
    }

    export class VershyHandler extends Handler {};

    // Interfaces
    export interface ListenerOptions {
        name: string;
        ponce?: boolean;
        type?: "process" | "client";
    }

    export interface ClientOptions extends Eris.ClientOptions {}
}

export = Vershy;