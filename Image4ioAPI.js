"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request-promise"));
var fs_1 = require("fs");
// Create a new express application instance
var Image4ioAPI = /** @class */ (function () {
    function Image4ioAPI(apiKey, apiSecret) {
        this.baseUrl = "https://api.image4.io";
        this.upload = {};
        this.apiKey = "";
        this.apiSecret = "";
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    Image4ioAPI.prototype.Upload = function (model) {
        try {
            return this.UploadAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.UploadAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Path == null || !model.Path.trim())) return [3 /*break*/, 1];
                        throw new Error("Path parameter is required.");
                    case 1:
                        formData = {
                            files: Array(),
                            overwrite: String(model.Overwrite),
                            use_filename: String(model.UseFilename),
                        };
                        model.Files.forEach(function (file) {
                            formData.files.push(fs_1.createReadStream(file.Data));
                        });
                        return [4 /*yield*/, request.post({ url: this.baseUrl + '/v0.1/upload?path=' + model.Path, formData: formData }, function (req, res, next) {
                                if (res.statusCode == 200) {
                                    return;
                                }
                                else {
                                    throw new Error("JSON Parse failed. Status code " + res.statusCode);
                                }
                            }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.Copy = function (model) {
        try {
            return this.CopyAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
        this.CopyAsync(model);
    };
    Image4ioAPI.prototype.CopyAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Source == null || !model.Source.trim())) return [3 /*break*/, 1];
                        throw new Error("Source parameter is required.");
                    case 1: return [4 /*yield*/, request.put(this.baseUrl + '/v0.1/copy?source=' + model.Source + '&target_path=' + model.TargetPath, function (err, res, body) {
                            if (res.statusCode == 200) {
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed. Status code " + res.statusCode);
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.GetImageDetails = function (model) {
        try {
            return this.GetImageDetailsAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.GetImageDetailsAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Name == null || !model.Name.trim())) return [3 /*break*/, 1];
                        throw new Error("Name parameter is required.");
                    case 1: return [4 /*yield*/, request.get(this.baseUrl + '/v0.1/get?name=' + model.Name, function (err, res, body) {
                            if (res.statusCode == 200) {
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.DeleteFolder = function (model) {
        try {
            return this.DeleteFolderAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.DeleteFolderAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Path == null || !model.Path.trim())) return [3 /*break*/, 1];
                        throw new Error("Folder path is required.");
                    case 1: return [4 /*yield*/, request.delete(this.baseUrl + '/v0.1/deletefolder?path=' + model.Path, function (err, res, body) {
                            //console.log(body);
                            if (res.statusCode == 200) {
                                //console.log(res.body);
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.DeleteFile = function (model) {
        try {
            return this.DeleteFileAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.DeleteFileAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Name == null || !model.Name.trim())) return [3 /*break*/, 1];
                        throw new Error("Folder path is required.");
                    case 1: return [4 /*yield*/, request.delete(this.baseUrl + '/v0.1/deletefile?name=' + model.Name, function (err, res, body) {
                            //console.log(body);
                            if (res.statusCode == 200) {
                                //console.log(res.body);
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        throw error_5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.CreateFolder = function (model) {
        try {
            return this.CreateFolderAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.CreateFolderAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Path == null || !model.Path.trim())) return [3 /*break*/, 1];
                        throw new Error("Folder path is required.");
                    case 1: return [4 /*yield*/, request.post(this.baseUrl + '/v0.1/CreateFolder?path=' + model.Path, function (err, res, body) {
                            //console.log(body);
                            if (res.statusCode == 200) {
                                //console.log(res.body);
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_6 = _a.sent();
                        throw error_6;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.Fetch = function (model) {
        try {
            return this.FetchAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.FetchAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(model.From == null || !model.From.trim())) return [3 /*break*/, 1];
                        throw new Error("From parameter is required.");
                    case 1:
                        if (!(model.TargetPath == null || !model.TargetPath.trim())) return [3 /*break*/, 2];
                        throw new Error("Target path parameter is required.");
                    case 2: return [4 /*yield*/, request.post(this.baseUrl + '/v0.1/fetch?from=' + model.From + "&target_path=" + model.TargetPath, function (err, res, body) {
                            //console.log(body);
                            if (res.statusCode == 200) {
                                //console.log(res.body);
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_7 = _a.sent();
                        throw error_7;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.ListFolder = function (model) {
        try {
            return this.ListFolderAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.ListFolderAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(model.Path == null || !model.Path.trim())) return [3 /*break*/, 1];
                        throw new Error("Path parameter is required.");
                    case 1: return [4 /*yield*/, request.get(this.baseUrl + '/v0.1/listfolder?path=' + model.Path, function (err, res, body) {
                            //console.log(body);
                            if (res.statusCode == 200) {
                                //console.log(res.body);
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_8 = _a.sent();
                        throw error_8;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Image4ioAPI.prototype.Move = function (model) {
        try {
            return this.MoveAsync(model).then(function (response) {
                return JSON.parse(String(response));
            }).catch(function (exception) {
                throw exception;
            });
        }
        catch (exception) {
            throw exception;
        }
    };
    Image4ioAPI.prototype.MoveAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(model.Source == null || !model.Source.trim())) return [3 /*break*/, 1];
                        throw new Error("Source parameter is required.");
                    case 1:
                        if (!(model.TargetPath == null || !model.TargetPath.trim())) return [3 /*break*/, 2];
                        throw new Error("Target path is required.");
                    case 2: return [4 /*yield*/, request.put(this.baseUrl + '/v0.1/move?source=' + model.Source + "&target_path=" + model.TargetPath, function (err, res, body) {
                            //console.log(body);
                            if (res.statusCode == 200) {
                                //console.log(res.body);
                                return;
                            }
                            else {
                                throw new Error("JSON Parse failed.");
                            }
                        }).auth(this.apiKey, this.apiSecret, true)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_9 = _a.sent();
                        throw error_9;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Image4ioAPI;
}());
exports.Image4ioAPI = Image4ioAPI;
