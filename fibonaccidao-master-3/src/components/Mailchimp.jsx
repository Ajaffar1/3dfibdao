import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import InputField from "./inputMail";
import { useGHStContext } from './ContextProvider';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0 11vw 10% 11vw",
        backgroundColor: "black",
        // height: "100vh",
        // textAlign: "center",

    },
    h2: {
        fontFamily: `serif`,
        color: "white",
        fontSize: "2.6vw",
        textSizeAdjust: "auto",
        fontWeight: "bold",
        paddingBottom: "2vh",
        marginTop: "0",
        paddingTop: "2vw",
        textAlign: "center"
    },
    emailContainer:{
        paddingBottom: "2vw",
        textAlign: "center"
    }
  }));

const CustomForm = ({ status, message, onValidated }) => {

    const classes = useStyles();

    const {modalOpen, setModalOpen} = useGHStContext();

    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,

        });

    }

    useEffect(() => {
        if(status === "success") clearFields();
        if(modalOpen && status === "success") clearFields();
    }, [status, modalOpen])

    const clearFields = () => {
        setEmail('');
    }


    return (
        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className={classes.h2}>
                {status === "success" ? "Success!" :
                    "Join our email list for future updates!"}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className={classes.emailContainer}>
                    <InputField
                        label=""
                        onChangeHandler={setEmail}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                        className={classes.email}
                    />

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            {
                status === 'success' ? <Button
                    handleClick={() => setModalOpen(false)}
                    label="Close"
                    size="big"
                    customClass="g__justify-self-center"
                /> : <InputField
                    label="Subscribe"
                    type="submit"
                    formValues={[email]}
                />

            }
        </form>
    );
};


const Mailchimp = props => {
    const url = `https://fibdao.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    
    return (

        <div>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default Mailchimp;