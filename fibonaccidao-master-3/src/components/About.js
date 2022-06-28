import { makeStyles } from '@material-ui/core/styles';
import "@google/model-viewer/dist/model-viewer";



const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0% 11vw 0% 11vw",
        // backgroundColor: "#02113E",
        // backgroundColor: 'rgba(2, 17, 62)',
        backgroundColor: "#000",
        // height: "50vh",
        // maxHeight: "100vh"
        paddingBottom: "5vh",
        display: "flex"

    },
    img: {
        paddingTop: "5vh",
        float: "right",
        // maxHeight: "50vh",
        height: "auto",
        width: "32vw",
        maxWidth: "40vw",
        paddingRight: "10vw"
    },
    h2: {
        paddingTop: "7vh",
        marginTop: "0",
        fontFamily: `serif`,
        color: "white",
        fontSize: "2.6vw",
        textSizeAdjust: "auto",
        paddingBottom: "2.2vh",
        marginBottom: "0"
    },
    p: {
        paddingRight: "5vw",
        width: "35vw",
        fontFamily: `Judson, serif`,
        color: "white",
        fontSize: "1.3vw",
        textSizeAdjust: "auto",
        paddingTop: "0",
        marginTop: "0"

    },
    button: {
        "backgroundColor": "#FF0055",
        "borderRadius": "30px",
        "boxShadow": "rgba(255, 0, 85, .2) 0 -25px 18px -14px inset,rgba(255, 0, 85, .15) 0 1px 2px,rgba(255, 0, 85, .15) 0 2px 4px,rgba(255, 0, 85, .15) 0 4px 8px,rgba(255, 0, 85, .15) 0 8px 16px,rgba(255, 0, 85, .15) 0 16px 32px",
        "color": "white",
        "display": "inline-block",
        "padding": "1.5vh 2vw",
        "marginTop": "2vh",
        "border": "0",
        "fontSize": "1.5vw",
        fontWeight: "bold",
        "&:hover, &:focus": {
            backgroundColor: "#ff006f",
            transition: "1s",
        },
        cursor: "url('cursor-clicker.png'), pointer"
    }

}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.container} id="about">
            {/* <img className={classes.img} src="/images/goldkit.png" /> */}
            {/* <ModelViewer  type="gltf" src="images/Pie_Chart_2.gltf" /> */}
            <div>
                <h2 className={classes.h2}>What is FibDAO?</h2>
                <p className={classes.p}>FIBDAO is the initation for  change in the Web3 ecosystem. When you join FibDao, not only will you join the most epic community ever you will receive quality-focused avatars, governance rights, V.C. fund backing, high-end events and much more! Are you ready to join the community before it's to late?</p>
                <a href="https://whitepaper.fibdao.io/">
                    <button className={classes.button}><a>See More</a></button>
                </a>

            </div>
            <div style={{paddingLeft: "5vw"}}>
            <model-viewer id="size"
                src={require("./Kit.glb")}
                camera-controls
                disable-zoom
                auto-rotate
            ></model-viewer>
            </div>



        </div>
    )
}

export default About