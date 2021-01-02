import { Stream } from "stream";
import UploadFile from "./UploadFile";

export default class UploadImagesRequestModel {
    private useFilename: boolean = false;
    private overwrite: boolean = false;
    private path: string = "";
    private files:UploadFile[]=new Array();

    constructor(path: string, overwrite: boolean, useFilename: boolean,files: UploadFile[]) {
        this.useFilename = useFilename;
        this.overwrite = overwrite;
        this.path = path;
        this.files=files;
    }
    public get UseFilename(): boolean {
        return this.useFilename;
    }

    public get Overwrite(): boolean {
        return this.overwrite;
    }

    public get Path(): string {
        return this.path;
    }

    public get Files(): UploadFile[] {
        return this.files;
    }
}

