"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FetchStreamRequestModel = /** @class */ (function () {
    function FetchStreamRequestModel(from, targetPath, filename) {
        this.from = "";
        this.targetPath = "";
        this.filename = "";
        this.from = from;
        this.targetPath = targetPath;
        this.filename = filename;
    }
    Object.defineProperty(FetchStreamRequestModel.prototype, "From", {
        get: function () {
            return this.from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FetchStreamRequestModel.prototype, "TargetPath", {
        get: function () {
            return this.targetPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FetchStreamRequestModel.prototype, "Filename", {
        get: function () {
            return this.filename;
        },
        enumerable: false,
        configurable: true
    });
    return FetchStreamRequestModel;
}());
exports.default = FetchStreamRequestModel;