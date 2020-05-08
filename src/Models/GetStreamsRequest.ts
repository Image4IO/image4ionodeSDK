export default class GetStreamsRequest {
    private names: Array<string> = new Array();

    constructor(names: Array<string>) {
        this.names = names;
    }

    public get Names(): Array<string> {
        return this.names;
    }
}