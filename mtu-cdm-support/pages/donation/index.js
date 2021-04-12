import Head from "next/head";
import Image from "next/image";

import Paragraph from "../../components/shared/Paragraph/Paragraph";
import Heading from "../../components/shared/Heading/Heading";
import Button from "../../components/shared/Button/Button";
import Box from "../../components/shared/Box/Box";
import * as donationData from "../../api/donationData";
import classes from "./Donation.module.scss";
const Donation = (props) => {
    return (
        <section className={classes.Donation}>
            <Head>
                <title>Donation | MTU CDM Support</title>
            </Head>
            <Heading text="Supports" />
            <Paragraph>လှူဒါန်းမှုများကို CDMဝန်ထမ်းများထံ လစဉ်ထောက်ပံ့ပေးလျက်ရှိပါသည်။</Paragraph>
            <div className={classes.Donation__PhotoBox}>
                {donationData.cards.map((c, i) => (
                    <div className={classes.Donation__Card} key={i}>
                        <figure>
                            <Image
                                className={classes.Donation__PhotoBox__Photo}
                                src={c.image}
                                alt={`${c.month} donations`}
                                width={400}
                                height={310}
                                priority={true}
                            />
                        </figure>
                        <Paragraph>{c.month} လအတွက် ထောက်ပံ့မှုများ</Paragraph>
                        <Paragraph>{c.description}</Paragraph>
                        {/* <Button valid={true} onClick={(e) => onButtonClick(e, c.month)}>
                            Read detail
                        </Button> */}
                    </div>
                ))}
            </div>
            <Box vertical>
                <Paragraph unmuted={true}>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                    Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                    {/* <i className="fas fa-arrow-right" style={{ marginLeft: ".8rem" }}></i> */}
                </Button>
            </Box>
            <Paragraph>
                အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်။
            </Paragraph>
            <div className={classes.Donation__Container}>
                <Paragraph>Mobile Payment များ</Paragraph>
                <div className={`${classes.Donation__Services} ${classes.Donation__Services_Pay}`}>
                    {donationData.services.payments.map((el, i) => (
                        <figure className={classes.Donation__ImageContainer} key={i}>
                            <Image
                                src={el.src}
                                alt={el.caption}
                                className={classes.Donation__ImageContainer__Image}
                                width={150}
                                priority={true}
                                height={150}
                            />
                            <Paragraph>{el.caption}</Paragraph>
                        </figure>
                    ))}
                </div>
            </div>
            <div className={classes.Donation__Container}>
                <Paragraph>Bank Service များ</Paragraph>
                <div className={`${classes.Donation__Services} ${classes.Donation__Services_Bank}`}>
                    {donationData.services.banks.map((el, i) => (
                        <figure className={classes.Donation__ImageContainer} key={i}>
                            <Image
                                src={el.src}
                                alt={el.caption}
                                className={classes.Donation__ImageContainer__Image}
                                width={150}
                                height={150}
                                priority={true}
                            />
                            <Paragraph>{el.caption}</Paragraph>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Donation;
