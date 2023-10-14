export interface ITask {
    id: number;
    title: string;
    dueDate: string;
    category: string;
}

export interface IQuoteRes {
    quote: string;
    author: string;
    category: string;
}