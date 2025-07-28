import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ColorScheme } from '../../../utils/theme';

export const useDashboardStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        fontWeight: 'bold',
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderRadius: 8,
    },
    fixedHeight: {
        height: 240,
    },
    accountCardHeight: {
        height: 172,
    },
    chart: {
        height: '100%',
    },
    apolloCard: {
        backgroundColor: ColorScheme.ORANGE,
        color: ColorScheme.WHITE,
    },
}));
