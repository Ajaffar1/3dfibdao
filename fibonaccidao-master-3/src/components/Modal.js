import React from 'react';
import { FaPlus } from "react-icons/fa";
import { useGHStContext } from './ContextProvider';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    modalShow:{
        padding: "0 11vw 10% 11vw",
        backgroundColor: "black",
    },
    modalClose:{

    },
    modalContent:{
        padding: "0 11vw 10% 11vw",
        backgroundColor: "black",
    }
}));

const Modal = (props) => {
    const {setModalOpen, modalOpen} = useGHStContext();
    const classes = useStyles();
    const handleClose = (e) => {
        // Controls event delegation from bubbling
        e.stopPropagation();
        // Closes modal
        setModalOpen(false);
    }

    return (
        <div
            className={modalOpen ? classes.modalShow : classes.modalClose}
            onClick={handleClose}
        >
            <div
                className={classes.modalContent}
                onClick={e => e.stopPropagation()}
            >
                <span
                    className="modal__close"
                    onClick={handleClose}
                ><FaPlus /></span>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;
