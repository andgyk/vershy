"use strict";

class Util {
    /**
     * Read files from a directory
     * @param {string} path The path of the directory
     * @param {string} ext Extension only files to get (Optional)
     */
    static readDirFiles (path, arr = [], ext = "") {
        const files = require("fs").readdirSync(path, { withFileTypes: true });

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let filePath = require("path").resolve(require("path").join(path, file.name));
            
            if (file.isDirectory()) {
                this.readDirFiles(filePath, arr);
            } else {
                let extensions = (ext.length) ? ext.split(",") : [];
                
                if (extensions.length) {
                    if (extensions.includes(file.name.substring(file.name.split(".")[0].length))) {
                        arr.push(filePath);
                    };
                } else {
                    arr.push(filePath);
                };
            };
        };

        return arr;
    };
};

module.exports = Util;