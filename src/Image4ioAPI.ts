import * as request from 'request-promise';
import * as Models from './Models';
import { createReadStream } from 'fs';

export class Image4ioAPI {
    public baseUrl: string = "https://api.image4.io";
    public upload: Object = {};
    public apiKey: string = "";
    public apiSecret: string = "";

    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }

    public Upload(model: Models.UploadFilesRequestModel) {
        try {
            return this.UploadAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async UploadAsync(model: Models.UploadFilesRequestModel) {
        try {
            if (model.Path == null || !model.Path.trim()) {
                throw new Error("Path parameter is required.")
            } else {
                var formData = {
                    files: Array(),
                    overwrite: String(model.Overwrite),
                    use_filename: String(model.UseFilename),
                };

                model.Files.forEach(file => {
                    formData.files.push(createReadStream(file.Data));
                });

                return await request.post({ url: this.baseUrl + '/v0.1/upload?path=' + model.Path, formData: formData }, function (req, res, next) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed. Status code " + res.statusCode);
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }


    public Copy(model: Models.CopyRequestModel) {
        try {
            return this.CopyAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
        this.CopyAsync(model);
    }
    private async CopyAsync(model: Models.CopyRequestModel) {
        try {
            if (model.Source == null || !model.Source.trim()) {
                throw new Error("Source parameter is required.")
            }
            else {
                return await request.put(this.baseUrl + '/v0.1/copy?source=' + model.Source + '&target_path=' + model.TargetPath, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed. Status code " + res.statusCode);
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }


    public GetImageDetails(model: Models.GetImageDetailsRequestModel) {
        try {
            return this.GetImageDetailsAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async GetImageDetailsAsync(model: Models.GetImageDetailsRequestModel) {
        try {
            if (model.Name == null || !model.Name.trim()) {
                throw new Error("Name parameter is required.")
            } else {
                return await request.get(this.baseUrl + '/v0.1/get?name=' + model.Name, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }

                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }


    public DeleteFolder(model: Models.DeleteFolderRequestModel) {
        try {
            return this.DeleteFolderAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async DeleteFolderAsync(model: Models.DeleteFolderRequestModel) {
        try {
            if (model.Path == null || !model.Path.trim()) {
                throw new Error("Folder path is required.")
            } else {
                return await request.delete(this.baseUrl + '/v0.1/deletefolder?path=' + model.Path, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }


    public DeleteFile(model: Models.DeleteFileRequestModel) {
        try {
            return this.DeleteFileAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async DeleteFileAsync(model: Models.DeleteFileRequestModel) {
        try {
            if (model.Name == null || !model.Name.trim()) {
                throw new Error("Folder path is required.")
            } else {
                return await request.delete(this.baseUrl + '/v0.1/deletefile?name=' + model.Name, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }


    public CreateFolder(model: Models.CreateFolderRequestModel) {
        try {
            return this.CreateFolderAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async CreateFolderAsync(model: Models.CreateFolderRequestModel) {
        try {
            if (model.Path == null || !model.Path.trim()) {
                throw new Error("Folder path is required.")
            } else {
                return await request.post(this.baseUrl + '/v0.1/CreateFolder?path=' + model.Path, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }

    public Fetch(model: Models.FetchRequestModel) {
        try {
            return this.FetchAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async FetchAsync(model: Models.FetchRequestModel) {
        try {
            if (model.From == null || !model.From.trim()) {
                throw new Error("From parameter is required.")
            } else if (model.TargetPath == null || !model.TargetPath.trim()) {
                throw new Error("Target path parameter is required.")
            } else {
                return await request.post(this.baseUrl + '/v0.1/fetch?from=' + model.From + "&target_path=" + model.TargetPath, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }

    public ListFolder(model: Models.ListFolderRequestModel) {
        try {
            return this.ListFolderAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async ListFolderAsync(model: Models.ListFolderRequestModel) {
        try {
            if (model.Path == null || !model.Path.trim()) {
                throw new Error("Path parameter is required.")
            } else {
                return await request.get(this.baseUrl + '/v0.1/listfolder?path=' + model.Path, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }

    public Move(model: Models.MoveRequestModel) {
        try {
            return this.MoveAsync(model).then(response => {
                return JSON.parse(String(response));
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async MoveAsync(model: Models.MoveRequestModel) {
        try {
            if (model.Source == null || !model.Source.trim()) {
                throw new Error("Source parameter is required.")
            } else if (model.TargetPath == null || !model.TargetPath.trim()) {
                throw new Error("Target path is required.")
            } else {
                return await request.put(this.baseUrl + '/v0.1/move?source=' + model.Source + "&target_path=" + model.TargetPath, function (err, res, body) {
                    if (res.statusCode == 200) {
                        return;
                    } else {
                        throw new Error("JSON Parse failed.")
                    }
                }).auth(this.apiKey, this.apiSecret, true);
            }
        } catch (error) {
            throw error;
        }
    }
}

