import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
    useTransactionsQuery,
    TransactionsQueryResult,
    Transaction,
} from '../../generated/graphql';
import { useChartStyles } from './Chart.style';

// Register Chart.js components for v3+
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
    currency: string;
}

export const LineChart: React.FC<ChartProps> = ({ currency }) => {
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
            amount: Number(transaction.amount), // Ensure amount is a number
        }))
        : [];

    const lineData = {
        labels: chartData.map(t => t.date),
        datasets: [
            {
                label: 'Amount',
                data: chartData.map(t => t.amount), // Now an array of numbers
                borderColor: '#29AABB',
                backgroundColor: 'rgba(41,170,187,0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const, // Use string literal type
            },
            title: {
                display: true,
                text: 'Spending (this month)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
        },
    };

    return (
        <Line
            data={lineData}
            options={options}
        />
    );
};
// ...existing code...
