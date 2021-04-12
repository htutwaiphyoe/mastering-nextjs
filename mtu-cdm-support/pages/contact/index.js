import { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Paragraph from "../../components/shared/Paragraph/Paragraph";
import Form from "../../components/shared/Form/Form";
import firebase from "../../api/firebase";
import { checkValidity } from "../../utils/utils";
import Button from "../../components/shared/Button/Button";
import classes from "./Contact.module.scss";
const Contact = (props) => {
    const media = useRef([
        { url: "https://m.facebook.com/mtustudentunion", icon: "facebook" },
        { url: "http://m.me/mtustudentunion", icon: "facebook-messenger" },
    ]);

    const [contactForm, setContactForm] = useState({
        name: {
            type: "input",
            config: {
                type: "text",
                placeholder: "Name",
                required: true,
            },
            value: "",
            validations: {
                required: true,
                minLength: 3,
            },
            valid: false,
            touch: false,
        },
        email: {
            type: "input",
            config: {
                type: "email",
                placeholder: "Email",
                required: true,
            },
            value: "",
            validations: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touch: false,
        },
        select: {
            type: "select",
            options: [
                { value: "select", shownValue: "- Select -" },
                { value: "feedback", shownValue: "Feedback" },
                { value: "member", shownValue: "Be a part of us" },
                { value: "Report", shownValue: "Report bugs or errors" },
            ],
            value: "select",
            validations: {
                default: "select",
            },
            valid: false,
            touch: false,
        },
        message: {
            type: "textarea",
            config: {
                required: true,
                placeholder: "Message",
            },
            value: "",
            validations: {
                required: true,
                minLength: 15,
            },
            valid: false,
            touch: false,
        },
    });

    const [formValid, setFormValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const onChangeHandler = (e, type) => {
        const newInput = { ...contactForm[type] };
        newInput.touch = true;
        newInput.value = e.target.value;
        newInput.valid = checkValidity(newInput.value, newInput.validations);
        const updatedContactForm = { ...contactForm };
        updatedContactForm[type] = newInput;
        let formValid = true;
        Object.keys(updatedContactForm).forEach(
            (el) => (formValid = updatedContactForm[el].valid && formValid)
        );
        setContactForm(updatedContactForm);
        setFormValid(formValid);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            type: contactForm.select.value,
            message: contactForm.message.value,
        };
        setLoading(true);
        await firebase.post("message.json", formData);
        setLoading(false);
        const newContactForm = { ...contactForm };
        Object.keys(newContactForm).forEach((key) => {
            const newInput = { ...newContactForm[key] };
            if (key === "select") {
                newInput.value = "select";
            } else {
                newInput.value = "";
            }
            newContactForm[key] = newInput;
        });

        setContactForm(newContactForm);
    };

    return (
        <section className={classes.Contact}>
            <Head>
                <title>Contact | MTU CDM Support</title>
            </Head>
            <div className={classes.Contact__Container}>
                <figure className={classes.Contact__ImageContainer}>
                    <Image
                        src="/imgs/contact.svg"
                        alt="Contact Icon"
                        className={classes.Contact__ImageContainer__Image}
                        width={300}
                        height={250}
                        priority={true}
                    />
                </figure>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
                <Paragraph>
                    CDM ထောက်ပံ့ရေးနှင့်ပတ်သတ်၍ အသေးစိတ်သိရှိလို၍ဖြစ်စေ၊ မေးမြန်းချင်လို၍ဖြစ်စေ MTU
                    CDM Support Team ထံသို့ အောက်ဖော်ပြပါနည်းလမ်းများနှင့် ဆက်သွယ်နိုင်ပါသည်။
                </Paragraph>
                <ul className={classes.Contact__List}>
                    {media.current.map((el, i) => (
                        <li className={`${classes.Contact__List__Item}`} key={i}>
                            <a
                                href={el.url}
                                className={`${classes[`Contact__List__Item_${i + 1}`]}`}
                            >
                                <i className={`fab fa-${el.icon}`}></i>
                            </a>
                        </li>
                    ))}
                </ul>

                <Paragraph>
                    Copyright &copy; 2021 | MTU Students' Union <br />
                    Terms & Conditions
                </Paragraph>
            </div>
            <Form
                formData={contactForm}
                onChangeHandler={onChangeHandler}
                formValid={formValid}
                onSubmitHandler={onSubmitHandler}
                loading={loading}
            />
        </section>
    );
};
export default Contact;
