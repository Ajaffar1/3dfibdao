import { makeStyles } from '@material-ui/core/styles';
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const useStyles = makeStyles((theme) => ({
    container: {
        content: "",
        clear: "both",
        boxSizing: "borderBox",
        // height:"45vh",
        width:"100%",
        // backgroundColor: "white",
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: "#000",
        padding: "5vh 0vw 5vh 11vw",
        display: "flex",
        flexDirection: "column"
    },
    column: {
        float: "left",
        width:"26vw",
        // height:"45vh",
        paddingRight: "1.5vw",
        paddingBottom:"0"
    },
    h2: {
        fontFamily: `serif`,
        color: "white",
        fontSize: "2.6vw",
        textSizeAdjust: "auto",
        fontWeight: "normal",
        marginBottom: "0",
        marginTop: "2vh"
    },
    h3: {
        fontFamily: `Judson, serif`,
        color: "white",
        fontSize: "1vw",
        textSizeAdjust: "auto",
        fontWeight: "normal",
        marginTop: "0",
        paddingBottom: "1vh",
        fontStyle: "italic"
    },
    p: {
        fontFamily: `Judson, serif`,
        color: "white",
        fontSize: "1vw",
        textSizeAdjust: "auto",
        maxWidth: '500px'

    },
    button: {
        "backgroundColor": "#2ec6a1",
        "borderRadius": "30px",
        "boxShadow": "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px",
        "color": "white",
        "cursor": "pointer",
        "display": "inline-block",
        "padding": "10px 20px",
        marginTop: "20px",
        "border": "0",
        "fontSize": "16px",
        "userSelect": "none",
        fontWeight: "bold"
    },
    avatars : {
        width: '45%',
    },
    preSale: {
        width: '45%',
        marginLeft: '40%'
    }

}));

const Information = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.avatars}>
                <SavedSearchOutlinedIcon style={{ fontSize: 50, color:"#FF0040", marginBottom: "0"}} />
                <h2 className={classes.h2}>5,555 Special Avatars</h2>
                <h3 className={classes.h3}>Which Avatar will you take to space?</h3>
                <p className={classes.p}>5,555 avatars will be available in total, split between the pre-sale and public sale. 
                Avatars not redeemed in the pre-sale will be deployed into the public sale. All avatar traits and attributes 
                will be generated randomly and revealed after the public sale.</p>
                {/* <a href="https://whitepaper.fibdao.io/">
                    <button className={classes.button}>See More</button>
                </a> */}
            </div>
            <div className={classes.preSale}>
                <BookmarkAddedOutlinedIcon style={{ fontSize: 50, color:"#FF0040", marginBottom: "0"}}/>
                <h2 className={classes.h2}>Pre-Sale</h2>
                <h3 className={classes.h3}>05.22.22</h3>
                <p className={classes.p}>We want to make the pre-sale as affordable as possible to reward our collectors; 
                hence we have chosen a price point of 0.05Ξ for the FIBDAO pre-sale.</p>
                {/* <a href="https://whitepaper.fibdao.io/">
                    <button className={classes.button}>See More</button>
                </a> */}
            </div>
            <div className={classes.design}>
                <CreateOutlinedIcon style={{ fontSize: 50, color:"#FF0040", marginBottom: "0"}}/>
                <h2 className={classes.h2}>Design & Features</h2>
                <h3 className={classes.h3}>Special Access for FibDao Holders!</h3>
                <p className={classes.p}>By being a part of the FibDao community, you will have access to connect, learn, and grow your 
                passion for Defi since every Fibdao holder will have the ability to stake their NFT for FBD tokens and partake in a governance structure.</p>
                {/* <a href="https://whitepaper.fibdao.io/">
                    <button className={classes.button}>See More</button>
                </a> */}
            </div>
        </div>
    )
}

export default Information