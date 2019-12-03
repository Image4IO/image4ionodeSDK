"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyRequestModel = /** @class */ (function () {
    function CopyRequestModel(source, targetPath) {
        this.source = "";
        this.targetPath = "";
        this.source = source;
        this.targetPath = targetPath;
    }
    Object.defineProperty(CopyRequestModel.prototype, "Source", {
        get: function () {
            return this.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CopyRequestModel.prototype, "TargetPath", {
        get: function () {
            return this.targetPath;
        },
        enumerable: true,
        configurable: true
    });
    return CopyRequestModel;
}());
exports.default = CopyRequestModel;
