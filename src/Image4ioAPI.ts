import * as Models from './Models';
import * as axios from 'axios';
import * as https from 'https';
import * as qs from 'querystring';
import * as fs from 'fs';
const FormData = require('form-data');

export class Image4ioClient {
    public baseUrl: string = "https://api.image4.io/v1.0";
    public upload: Object = {};
    public apiKey: string = "";
    public apiSecret: string = "";
    private client=axios.default;
    private agent=new https.Agent({ keepAlive: true});

    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    
    public UploadImage(model: Models.UploadImagesRequest) {
        try {
            return this.UploadImageAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async UploadImageAsync(model: Models.UploadImagesRequest) {
        try {
            let formData=new FormData();
            formData.append("path",model.Path);
            formData.append("overwrite",String(model.Overwrite))
            formData.append("useFilename",String(model.UseFilename))
            model.Files.forEach(file => {
                formData.append("files",fs.readFileSync(file.FilePath),file.FileName)
            });

            return await this.client.post(this.baseUrl+"/uploadImage",formData.getBuffer(),{
                httpsAgent:this.agent,
                headers:{
                    ...formData.getHeaders()
                },
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            })
        } catch (error) {
            throw error;
        }
    }


    public CopyImage(model: Models.CopyImageRequest) {
        try {
            return this.CopyImageAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async CopyImageAsync(model: Models.CopyImageRequest) {
        try {
            var formData={
                source: model.Source,
                targetPath : model.TargetPath,
                name:model.Name,
                useFilename:model.UseFilename,
                overwrite:model.Overwrite
            }

            return await this.client.put(this.baseUrl+"/copyImage",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public GetImage(model: Models.GetImageRequest) {
        try {
            return this.GetImageAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async GetImageAsync(model: Models.GetImageRequest) {
        try {
            var querystring= qs.stringify({
                name:model.Name
            })
            return await this.client.get(this.baseUrl+"/image?"+querystring,{
                httpsAgent: this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:"json"
            })
        } catch (error) {
            throw error;
        }
    }

    public DeleteFolder(model: Models.DeleteFolderRequest) {
        try {
            return this.DeleteFolderAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async DeleteFolderAsync(model: Models.DeleteFolderRequest) {
        try {
            let formData={
                path:model.Path
            }

            return await this.client.delete(this.baseUrl+"/deleteFolder",{
                httpsAgent:this.agent,
                data:formData,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            })
        } catch (error) {
            throw error;
        }
    }


    public DeleteImage(model: Models.DeleteImageRequest) {
        try {
            return this.DeleteImageAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async DeleteImageAsync(model: Models.DeleteImageRequest) {
        try {
            let formData={
                name:model.Name
            }

            return await this.client.delete(this.baseUrl+"/deleteImage",{
                httpsAgent:this.agent,
                data:formData,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            })
        } catch (error) {
            throw error;
        }
    }


    public CreateFolder(model: Models.CreateFolderRequest) {
        try {
            return this.CreateFolderAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async CreateFolderAsync(model: Models.CreateFolderRequest) {
        try {
            var formData={
                path:model.Path
            }

            return await this.client.post(this.baseUrl+"/createFolder",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public FetchImage(model: Models.FetchImageRequest) {
        try {
            return this.FetchImageAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async FetchImageAsync(model: Models.FetchImageRequest) {
        try {
            var formData={
                from:model.From,
                targetPath : model.TargetPath,
                useFilename:model.UseFilename,
            }

            return await this.client.post(this.baseUrl+"/fetchImage",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public FetchStream(model: Models.FetchStreamRequest) {
        try {
            return this.FetchStreamAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async FetchStreamAsync(model: Models.FetchStreamRequest) {
        try {
            var formData={
                from:model.From,
                targetPath : model.TargetPath,
                filename:model.Filename
            }

            return await this.client.post(this.baseUrl+"/fetchStream",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public ListFolder(model: Models.ListFolderRequest) {
        try {
            return this.ListFolderAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async ListFolderAsync(model: Models.ListFolderRequest) {
        try {
            var querystring= qs.stringify({
                path:model.Path,
                continuationToken: model.ContinuationToken
            })
            return await this.client.get(this.baseUrl+"/listFolder?"+querystring,{
                httpsAgent: this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:"json"
            })
        } catch (error) {
            throw error;
        }
    }

    public MoveImage(model: Models.MoveImageRequest) {
        try {
            return this.MoveImageAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async MoveImageAsync(model: Models.MoveImageRequest) {
        try {
            var formData={
                source: model.Source,
                targetPath : model.TargetPath,
            }

            return await this.client.put(this.baseUrl+"/moveImage",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public Purge() {
        try {
            return this.PurgeAsync().then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async PurgeAsync() {
        try {
            return await this.client.delete(this.baseUrl+"/purge",{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public GetSubscription() {
        try {
            return this.GetSubscriptionAsync().then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async GetSubscriptionAsync() {
        try {
            return await this.client.get(this.baseUrl+"/subscription",{
                httpsAgent: this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:"json"
            })
        } catch (error) {
            throw error;
        }
    }

    public StartUploadStream(model: Models.StartUploadStreamRequest) {
        try {
            return this.StartUploadStreamAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async StartUploadStreamAsync(model: Models.StartUploadStreamRequest) {
        try {
            var formData={
                path: model.Path,
                filename:model.Filename
            }

            return await this.client.post(this.baseUrl+"/uploadStream",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public UploadStreamPart(model: Models.UploadStreamPartRequest) {
        try {
            return this.UploadStreamPartAsync(model).then(response => {
                if(response.status==202){
                    return true;
                }else{
                    return response.data
                }
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async UploadStreamPartAsync(model: Models.UploadStreamPartRequest) {
        try {
            let formData=new FormData();
            formData.append("filename",model.Filename);
            formData.append("partId",model.PartId);
            formData.append("part",model.Part);
            formData.append("token",model.Token);
            return await this.client.patch(this.baseUrl+"/uploadStream",formData.getBuffer(),{
                httpsAgent:this.agent,
                headers:{
                    ...formData.getHeaders()
                },
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
            
        } catch (exception) {
            throw exception;
        }
    }

    public FinalizeStream(model: Models.FinalizeStreamRequest) {
        try {
            return this.FinalizeStreamAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async FinalizeStreamAsync(model: Models.FinalizeStreamRequest) {
        try {
            var formData={
                filename: model.Filename,
                token : model.Token
            }

            return await this.client.post(this.baseUrl+"/finalizeStream",formData,{
                httpsAgent:this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            });
        } catch (error) {
            throw error;
        }
    }

    public GetStream(model: Models.GetStreamRequest) {
        try {
            return this.GetStreamAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async GetStreamAsync(model: Models.GetStreamRequest) {
        try {
            var querystring= qs.stringify({
                name:model.Name
            })
            return await this.client.get(this.baseUrl+"/stream?"+querystring,{
                httpsAgent: this.agent,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:"json"
            })
        } catch (error) {
            throw error;
        }
    }

    public DeleteStream(model: Models.DeleteStreamRequest) {
        try {
            return this.DeleteStreamAsync(model).then(response => {
                return response.data;
            }).catch(exception => {
                throw exception;
            });
        } catch (exception) {
            throw exception;
        }
    }
    private async DeleteStreamAsync(model: Models.DeleteStreamRequest) {
        try {
            let formData={
                name:model.Name
            }

            return await this.client.post(this.baseUrl+"/deleteStream",{
                httpsAgent:this.agent,
                data:formData,
                auth:{
                    username:this.apiKey,
                    password:this.apiSecret
                },
                responseType:'json'
            })
        } catch (error) {
            throw error;
        }
    }
}

