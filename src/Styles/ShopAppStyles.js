import { makeStyles } from '@mui/styles';
import Sizes from './Sizes';

const useStyles = makeStyles({
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "scroll",
        backgroundColor: "white",
        // color:'white'
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [Sizes.down("xl")]: {
            width: "70%"
        },
        [Sizes.down("xs")]: {
            width: "70%"
        }
    },
    shops: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [Sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [Sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem"
        }
    },
})
export default useStyles;