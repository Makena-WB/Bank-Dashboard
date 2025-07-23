import React from 'react';
import { Line } from 'react-chartjs-2';
// Chart.js v2 does not require manual registration
import {
    useTransactionsQuery,
    TransactionsQueryResult,
    Transaction,
} from '../../generated/graphql';
import { useChartStyles } from './Chart.style';
interface ChartProps {
    currency: string;
}

export const Chart: React.FC<ChartProps> = ({ currency }) => {
    // GraphQL queries
    const { data }: TransactionsQueryResult = useTransactionsQuery({
        variables: { currency },
    });

    const classes = useChartStyles();

    // Prepare data for Chart.js
    const chartData = !!data
        ? data.transactions.map((transaction: Transaction) => ({
            date: new Date(Date.parse(transaction.date)).toLocaleDateString(),
            type: transaction.transactionType,
            amount: transaction.amount,
        }))
        : [];

    const lineData = {
        labels: chartData.map(t => t.date),
        datasets: [
            {
                label: 'Amount',
                data: chartData.map(t => t.amount),
                borderColor: '#29AABB',
                backgroundColor: 'rgba(41,170,187,0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Spending (this month)',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Amount',
                },
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Date',
                },
            }],
        },
    };

    return (
        <div className={classes.root}>
            <Line data={lineData} options={options} />
        </div>
    );
};
// ...existing code...
