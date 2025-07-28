import { makeStyles } from '@mui/styles';
import { createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { ColorScheme } from '../../../utils/theme';

export const useTransactionCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        expandedText: {
            fontSize: 14,
            marginBottom: 8,
        },
        avatar: {
            backgroundColor: ColorScheme.PRIMARY,
        },
    })
);
