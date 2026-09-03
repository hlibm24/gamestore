export interface Transaction {
    id: number;
    type: 'spend';
    amount: number;
    date: number;
    description: string;
}