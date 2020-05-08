export default class StartUploadStreamRequest {
    private path: string = "";
    private filename: string = "";
    private overwrite: boolean=false;

    constructor(source: string, targetPath: string, overwrite: boolean) {
        this.path = source;
        this.filename = targetPath;
        this.overwrite=overwrite;
    }

    public get Path(): string {
        return this.path;
    }

    public get Filename(): string {
        return this.filename;
    }

    public get Overwrite(): boolean {
        return this.overwrite;
    }
}