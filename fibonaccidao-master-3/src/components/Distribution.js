import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Group } from '@material-ui/icons';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { OBJModel } from 'react-3d-viewer';
import "@google/model-viewer/dist/model-viewer";

// const useStyles = makeStyles((theme) => ({
//     container: {
//         height: "70vh",
//         width: "100%",
//         backgroundColor: "#232831",
//         padding: "7vh 11vw 5vh 11vw",
//         textAlign: "center"
//     },
//     container2: {
//         height: "50vh",
//         width: "100%",
//         backgroundColor: "#3d48d2",
//         padding: "3vh 0vw 5vh 11vw",
//     },
//     column: {
//         float: "left",
//         width: "26vw",
//         height: "35vh",
//         paddingRight: "2vw"
//     },
//     h2: {
//         fontFamily: `"Roboto" sans-serif`,
//         color: "white",
//         fontSize: "2.6vw",
//         textSizeAdjust: "auto",
//         fontWeight: "normal",
//         textAlign: "center",
//         marginTop: "0"
//     },
//     h3: {
//         fontFamily: `"Roboto" sans-serif`,
//         color: "white",
//         fontSize: "2.6vw",
//         textSizeAdjust: "auto",
//         fontWeight: "normal"
//     },
//     p: {
//         fontFamily: 'Roboto',
//         color: "white",
//         fontSize: "1.3vw",
//         textSizeAdjust: "auto"

//     },
//     img: {
//         maxHeight: "45vh",
//         width: "78vw",
//         objectFit: "cover"

//     },
//     icon:{
//         color:"white"
//     }
// }));
const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0 11vw 10% 11vw",
        backgroundColor: "black",
        // height: "100vh",
        // textAlign: "center",

    },
    img: {
        height: "auto",
        width: "73vw",
        textAlign: "center"
    },
    h2: {
        fontFamily: `serif`,
        color: "white",
        fontSize: "2.6vw",
        textSizeAdjust: "auto",
        fontWeight: "bold",
        paddingBottom: "4vh",
        marginTop: "0",
        paddingTop: "10%",
        textAlign: "center"
    },

}));

const Distribution = () => {
    const classes = useStyles();

    return (
        // <div id="distribution">
        //     <div className={classes.container} >
        //         <h2 className={classes.h2}>Total Distribution</h2>
        //         <img className={classes.img} src="/images/nft2.png" />
        //     </div>
        //     <div className={classes.container2}>
        //         <div className={classes.column}>
        //             <PublicIcon style={{ fontSize: 75, color:"white"}}/>
        //             <h3 className={classes.h3}>41% open to Public Sale</h3>
        //             <p className={classes.p}>Mint price to the public will be disclosed soon!</p>
        //         </div>
        //         <div className={classes.column}>
        //             <CurrencyExchangeIcon style={{ fontSize: 75, color:"white"}}/>
        //             <h3 className={classes.h3}>55% open to FIB Holder</h3>
        //             <p className={classes.p}>Mint price will be 0.05Ξ for the Whitelist members.</p>
        //         </div>
        //         <div className={classes.column}>
        //             <GroupsIcon style={{ fontSize: 75, color:"white"}}/>
        //             <h3 className={classes.h3}>4% to the FIBDAO Team</h3>
        //             <p className={classes.p}>4% will be given back to the FIBDAO Team. Wouldn't you want to keep your baby as well?</p>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className={classes.container} >
                <h2 className={classes.h2}>Where are the shares distributed?</h2>
                <img className={classes.img} src="/images/distribution2.png" />
                {/* <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="shared-assets/models/NeilArmstrong.glb" ar ar-modes="webxr scene-viewer quick-look" environment-image="shared-assets/environments/moon_1k.hdr" poster="shared-assets/models/NeilArmstrong.webp" seamless-poster shadow-intensity="1" camera-controls enable-pan></model-viewer> */}
                {/* <OBJModel width="200" height="200"  position={{x:0,y:0,z:0}} enableZoom = {false} poster="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb" src="/images/Pie_Chart.obj" textPath="" /> */}
                {/* <div className={classes.img}>
                    <model-viewer id="size"
                        src="images/Pie_Chart.glb"
                        camera-controls
                        disable-zoom
                        enableZoom={false}
                    ></model-viewer>
                </div> */}
            </div>
        </div>

    )
}

export default Distribution