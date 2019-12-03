"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FetchRequestModel = /** @class */ (function () {
    function FetchRequestModel(from, targetPath) {
        this.from = "";
        this.targetPath = "";
        this.from = from;
        this.targetPath = targetPath;
    }
    Object.defineProperty(FetchRequestModel.prototype, "From", {
        get: function () {
            return this.from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FetchRequestModel.prototype, "TargetPath", {
        get: function () {
            return this.targetPath;
        },
        enumerable: true,
        configurable: true
    });
    return FetchRequestModel;
}());
exports.default = FetchRequestModel;
