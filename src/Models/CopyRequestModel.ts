
export default class CopyRequestModel {
    private source: string = "";
    private targetPath: string = "";

    constructor(source: string, targetPath: string) {
        this.source = source;
        this.targetPath = targetPath;
    }

    public get Source(): string {
        return this.source;
    }

    public get TargetPath(): string {
        return this.targetPath;
    }

}
