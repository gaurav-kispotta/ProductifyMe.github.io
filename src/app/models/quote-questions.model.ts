export class QuoteQuestions {
    public questionTitle: string;
    public minCount: number;
    public maxCount: number;
    public value: number;
    public formatValueFunction: (v: number) => string;

    constructor() {
        this.value = this.minCount;
    }
}
