import { createContext, useState, useEffect } from "react"

import { api } from "./services/api";


export const TransactionsContext = createContext([])

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

export function TansactionsProvider() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={transactions}>

        </TransactionsContext.Provider>
    )
}
