export default class FetchRequestModel {
    private from: string = "";
    private targetPath: string = "";

    constructor(from: string, targetPath: string) {
        this.from = from;
        this.targetPath = targetPath;
    }

    public get From(): string {
        return this.from;
    }

    public get TargetPath(): string {
        return this.targetPath;
    }

}