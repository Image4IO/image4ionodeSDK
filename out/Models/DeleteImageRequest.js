"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteFileRequestModel = /** @class */ (function () {
    function DeleteFileRequestModel(name) {
        this.name = "";
        this.name = name;
    }
    Object.defineProperty(DeleteFileRequestModel.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return DeleteFileRequestModel;
}());
exports.default = DeleteFileRequestModel;
