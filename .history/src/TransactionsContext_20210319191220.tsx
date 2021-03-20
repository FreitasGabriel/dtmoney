import { createContext, useState, useEffect, ReactNode } from "react"

import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     category: string;
//     type: string;
// }

interface TransactionsProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: TransactionInput) {


        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}
