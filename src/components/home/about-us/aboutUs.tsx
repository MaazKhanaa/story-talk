import { Col, Row } from "antd"
import AppHeading from "../../common/app-heading/app-heading";
import DividerLine from "../../common/divider/divider";
import ContentParagraph from "../../common/content-paragraph/contentParagraph";
import AppSmButton from "../../common/app-sm-button/appSmButton";
import aboutUsImg from '../../../assets/images/aboutus.png';

const AboutUS = () => {
    return (
        <>
            <div className="container">
                <Row style={{ marginTop: '100px' }}>
                    <Col span={15}>
                        <h3 className="topHeading">About us</h3>
                        <AppHeading text="Listen customized stories with the help of AI" classNamess="text-center" />
                        <DividerLine />
                        <ContentParagraph text="Hello ! Are you finding the best AI Story generator ? Then Welcome to Story talk Ai . Where you can make your imagination come alive with the help of Ai . You can make personalized bedtime stories , You can generate short stories using your words , and make short bedtime stories for your kids . With the help of AI we have crafted a captivating world where creativity knows no bound .Our Ai storytelling platform combines the wonders of technology with the art of AI to create unique and creative tales for your children . Every story is designed carefully to ignite children’s imagination , inspire their curiosity and foster a love for reading ." />
                        <div style={{ marginTop: '60px' }}>
                            <AppSmButton text="Read More" />
                        </div>
                    </Col>
                    <Col span={9}>
                        <img src={aboutUsImg} style={{ padding: '0 20px' }} />
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default AboutUS;