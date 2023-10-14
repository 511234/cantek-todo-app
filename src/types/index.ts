export interface ITask {
    id: number;
    title: string;
    dueDate: Date;
    category: string;
}

export interface IQuoteRes {
    quote: string;
    author: string;
    category: string;
}