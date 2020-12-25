"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StartUploadStreamRequest = /** @class */ (function () {
    function StartUploadStreamRequest(path, filename) {
        this.path = "";
        this.filename = "";
        this.path = path;
        this.filename = filename;
    }
    Object.defineProperty(StartUploadStreamRequest.prototype, "Path", {
        get: function () {
            return this.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StartUploadStreamRequest.prototype, "Filename", {
        get: function () {
            return this.filename;
        },
        enumerable: false,
        configurable: true
    });
    return StartUploadStreamRequest;
}());
exports.default = StartUploadStreamRequest;
