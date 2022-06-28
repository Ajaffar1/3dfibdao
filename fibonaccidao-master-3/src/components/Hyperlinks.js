import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        padding: "0vh 11vw 0vh 11vw",
        textAlign: "center",
        background: "black"
    },
    icon: {
        paddingTop:"5vw",
        paddingBottom:"5vw",
        marginLeft:"10vw",
        marginRight:"10vw",
        height: "auto",
        width:"5vw",
        transition: "1s",
        "&:hover, &:focus": {
            transform: "scale(1.2)",
        }
    }
}));
const Hyperlinks = () => {
    const classes = useStyles();

    

    return (
        <div className={classes.container}>
            <a href="https://twitter.com/FibDao">
                <img className={classes.icon} src="/images/twitter.png" />
            </a>
            <a href="https://www.instagram.com/fibdao/">
                <img className={classes.icon} src="/images/instagram.png" />
            </a>
            <a href="https://discord.gg/hAURy3jVKe">
                <img className={classes.icon} src="/images/discord.png" />
            </a>
        </div>
    )
}

export default Hyperlinks