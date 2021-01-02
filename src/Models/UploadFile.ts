export default class UploadFile {
    private filepath:string="";
    private filename: string = "";

    constructor(filepath: string, filename: string) {
        this.filepath = filepath;
        this.filename = filename;
    }

    public get FilePath(): string {
        return this.filepath;
    }

    public get FileName(): string {
        return this.filename;
    }

}
