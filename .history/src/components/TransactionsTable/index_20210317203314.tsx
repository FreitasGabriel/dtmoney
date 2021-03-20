import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction: Object) => {
                        return (
                            <tr>
                                <td>{transaction.title}</td>
                                <td className="deposit">R$12.000</td>
                                <td>Desenvolvimento</td>
                                <td>20/02/2021</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}