"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyRequestModel = /** @class */ (function () {
    function CopyRequestModel(source, targetPath, name, useFilename, overwrite) {
        this.source = "";
        this.targetPath = "";
        this.name = "";
        this.useFilename = false;
        this.overwrite = false;
        this.source = source;
        this.targetPath = targetPath;
        this.name = name;
        this.useFilename = useFilename;
        this.overwrite = overwrite;
    }
    Object.defineProperty(CopyRequestModel.prototype, "Source", {
        get: function () {
            return this.source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CopyRequestModel.prototype, "TargetPath", {
        get: function () {
            return this.targetPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CopyRequestModel.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CopyRequestModel.prototype, "UseFilename", {
        get: function () {
            return this.useFilename;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CopyRequestModel.prototype, "Overwrite", {
        get: function () {
            return this.overwrite;
        },
        enumerable: false,
        configurable: true
    });
    return CopyRequestModel;
}());
exports.default = CopyRequestModel;
