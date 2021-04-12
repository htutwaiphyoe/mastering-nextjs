import Image from "next/image";
import Head from "next/head";

import Heading from "../../components/shared/Heading/Heading";
import Paragraph from "../../components/shared/Paragraph/Paragraph";
import Button from "../../components/shared/Button/Button";
import * as aboutData from "../../api/aboutData";
import classes from "./About.module.scss";
const About = (props) => {
    return (
        <section className={classes.About}>
            <Head>
                <title>About | MTU CDM Support</title>
            </Head>
            <figure className={classes.About__Figure}>
                <Image
                    src="/imgs/sulogo.jpg"
                    alt="MTU Logo"
                    className={classes.About__Figure__Image}
                    width={150}
                    height={150}
                    priority={true}
                />
            </figure>
            <Heading text="about us" />
            <Paragraph>
                မင်းအောင်လှိုင်ဦးစီးသော ဖက်စစ်စစ်တပ်သည် Feb 1 ရက်နေ့မှစ၍ အနိုင်ရပါတီ NLD ၏
                အမတ်များနှင့် နိုင်ငံတော်အကြီးအကဲများကို ဖမ်းဆီးထိန်းသိမ်းကာ နိုင်ငံတော်အာဏာကို
                အတင်းအဓမ္မသိမ်းယူခဲ့သည်။ ထိုအချိန်မှစ၍ နိုင်ငံတစ်ဝှမ်း အစိုးရဝန်ထမ်းများသည် Civil
                Disobedience Movement ဟုခေါ်သော အာဏာဖီဆန်ခြင်း လှုပ်ရှားမှု၌ ပါဝင်လာကြသည်။
                ထိုကဲ့သို့ ပြည်သူ့ဘက်မှ ရပ်တည်သော MTU ဝန်ထမ်းများကို တစ်ဖက်တစ်လှမ်းမှကူညီရန် MTUSU
                သည် MTU CDM Support team အားဖွဲ့စည်းပြီး ကူညီထောက်ပံ့ငွေများလက်ခံလျက်ရှိပါသည်။
            </Paragraph>

            <Button link={true} url="http://m.me/mtustudentunion">
                Support Now
            </Button>
            <Heading text="strategies" />
            <Paragraph>MTU CDM Support Teamမှ လုပ်ဆောင်နေသည့် အစီအစဉ်များ</Paragraph>
            <div className={classes.About__List}>
                {aboutData.items.map((item, i) => (
                    <div className={classes.About__List__Item} key={i}>
                        <ion-icon
                            className={classes.About__List__Icon}
                            name={`${item.icon}-outline`}
                        ></ion-icon>
                        <Paragraph>{item.text}</Paragraph>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
