import { useState, useEffect } from "react";
import Heading from "../components/shared/Heading/Heading";
import Paragraph from "../components/shared/Paragraph/Paragraph";
import Chart from "../components/Chart/Chart";
import Table from "../components/Table/Table";
import Button from "../components/shared/Button/Button";
import Box from "../components/shared/Box/Box";
import * as homeData from "../api/homeData";
import classes from "./Home.module.scss";

const Home = (props) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let timer2;
        if (percentage < homeData.percentage) {
            timer2 = setTimeout(() => {
                setPercentage((prevState) => prevState + 1);
            }, 35);
        }
        return () => {
            clearTimeout(timer2);
        };
    }, [percentage]);

    return (
        <section className={classes.Home}>
            <div className={classes.Home__Total}>
                <p className={classes.Home__Total__Heading}>K33,004,162+</p>
                <Paragraph>{`ရရှိထားပြီးဖြစ်သည်`}</Paragraph>
            </div>
            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    <div className={classes.Home__Total}>
                        <Heading text="Total" />
                        <div className={classes.Home__Total__Amount}>{percentage}%</div>
                        <Paragraph>{"ထောက်ပံ့ပြီးဖြစ်သည်"}</Paragraph>
                    </div>
                    <div>
                        <Chart {...homeData.charts.doughnut} />
                        <Paragraph>{homeData.charts.doughnut.title}</Paragraph>
                    </div>
                </div>
            </div>

            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    {homeData.charts.bar.map((c, i) => (
                        <div key={i}>
                            <Chart {...c} />
                            <Paragraph>{c.title}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
            <Box vertical>
                <Paragraph>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                    Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
            </Box>
            <Box vertical>
                <Paragraph>
                    ပါဝင်လှူဒါန်းကြသူ တစ်ဦးချင်းဆီကို CDM Support Team မှ ကျေးဇူးတင်ဂုဏ်ပြုပါသည်။
                </Paragraph>
                <Table donors={homeData.donors} />
            </Box>
        </section>
    );
};
export default Home;
