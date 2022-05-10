export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(
    // shortcut for above stuff
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
