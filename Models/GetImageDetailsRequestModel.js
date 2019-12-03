"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetImageDetailsRequestModel = /** @class */ (function () {
    function GetImageDetailsRequestModel(name) {
        this.name = "";
        this.name = name;
    }
    Object.defineProperty(GetImageDetailsRequestModel.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return GetImageDetailsRequestModel;
}());
exports.default = GetImageDetailsRequestModel;
