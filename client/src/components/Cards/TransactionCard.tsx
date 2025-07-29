import React, { useState } from 'react';
import {
    Avatar,
    Card,
    CardHeader,
    Collapse,
    CardContent,
    IconButton,
    CardActions,
    ThemeProvider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from '../../utils/theme';
import { useTransactionCardStyles } from './styles/TransactionCard.style';

interface TransactionCardProps {
    title: string;
    amount: string;
    time: string;
    card?: string;
    transactionIcon?: any;
    currencyIcon?: string;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
    title,
    time,
    amount,
    card,
    transactionIcon,
    currencyIcon,
}) => {
    // Fix: useTransactionCardStyles should return a ClassNameMap with correct keys
    const classes = useTransactionCardStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{ marginTop: 12 }}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar} aria-label="whatever">
                            {transactionIcon}
                        </Avatar>
                    }
                    title={title}
                    subheader={time}
                    style={{ textAlign: 'left' }}
                />
                <CardActions style={{ marginTop: '-40px' }}>
                    <IconButton
                        style={{ marginLeft: 420 }}
                        color="primary"
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent style={{ marginTop: '-24px' }}>
                        <hr
                            style={{
                                border: 'none',
                                borderBottom: `1px solid black`,
                            }}
                        />
                        {/* Ensure expandedText and avatar are defined in TransactionCard.style.ts */}
                        <div className={classes.expandedText ? classes.expandedText : undefined} style={{ marginTop: 12 }}>
                            The Money Tree card: <span style={{ color: 'black' }}>{card}</span>
                        </div>
                        <div className={classes.expandedText ? classes.expandedText : undefined}>
                            Amount:{' '}
                            <span style={{ color: 'black' }}>
                                {currencyIcon}
                                {amount}
                            </span>
                        </div>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};
