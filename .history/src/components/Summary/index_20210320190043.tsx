import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from './styles'

export function Summary() {

    const { transactions } = useContext(TransactionsContext)

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            return acc + transaction.amount
        }

        return acc
    }, 0)

    const totalExit = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'withdraw') {
            return acc - transaction.amount
        }

        return acc
    }, 0)

    const sumary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
        } else {
            acc.withdraw += transaction.amount
        }
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(totalDeposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(totalExit)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(totalDeposits - totalExit)}</strong>
            </div>
        </Container>
    )
}