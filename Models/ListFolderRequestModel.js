"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListFolderRequestModel = /** @class */ (function () {
    function ListFolderRequestModel(path) {
        this.path = "";
        this.path = path;
    }
    Object.defineProperty(ListFolderRequestModel.prototype, "Path", {
        get: function () {
            return this.path;
        },
        enumerable: true,
        configurable: true
    });
    return ListFolderRequestModel;
}());
exports.default = ListFolderRequestModel;
