"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetImageRequest = /** @class */ (function () {
    function GetImageRequest(name) {
        this.name = "";
        this.name = name;
    }
    Object.defineProperty(GetImageRequest.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return GetImageRequest;
}());
exports.default = GetImageRequest;
