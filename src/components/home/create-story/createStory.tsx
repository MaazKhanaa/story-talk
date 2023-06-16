import { Col, Row } from "antd"
import AppHeading from "../../common/app-heading/app-heading"
import DividerLine from "../../common/divider/divider";
import ContentParagraph from "../../common/content-paragraph/contentParagraph";
import AppSmButton from "../../common/app-sm-button/appSmButton";

const CreateStory = () => {
    return (
        <div className="container">
            <Row>
                <Col span={15}>
                    <AppHeading text="Make your personalized bedtime stories come alive with the help of AI" />
                    <DividerLine />
                    <ContentParagraph text="Welcome to Story Talk, the ultimate destination for personalized bedtime stories that come alive through the power of AI. Immerse yourself in a world where imagination knows no bounds and the magic of storytelling knows no limits. <br>
At Story Talk, we believe that every bedtime story should be a truly special experience. That's why we've combined the art of storytelling with cutting-edge AI technology to bring you an unparalleled adventure. Whether you're a parent looking to create unforgettable moments with your child or an individual seeking a captivating escape, our platform is designed to make your storytelling dreams a reality.
Creating personalized bedtime stories has never been easier. With our intuitive interface, you can effortlessly customize every aspect of your story. Choose the characters, settings, and themes that resonate with you and watch as they come to life in vivid detail. Our AI algorithms weave together the perfect blend of imagination and creativity, ensuring that each story is tailored to your unique preferences.
But it doesn't stop there. Story Talk goes beyond just creating stories. Our platform encourages interaction, allowing you to actively participate in the narrative. Engage with the characters, make choices that shape the plot, and let your imagination take the lead. As the story unfolds, you'll find yourself immersed in a world where the boundaries between reality and fiction blur.
We understand that storytelling is not limited to age or time. That's why Story Talk caters to all age groups, from children to adults. Whether you're a parent wanting to ignite your child's imagination or an adult seeking a moment of respite from the demands of everyday life, our AI-powered stories are crafted to captivate and inspire.
Join our vibrant community of storytellers and story lovers today. Discover a world where imagination is the key to unlocking infinite possibilities. With Story Talk, your personalized bedtime stories will take on a whole new dimension, enchanting both young and old alike. Experience the magic of AI-driven storytelling and let your imagination soar to new heights. Get ready to embark on unforgettable journeys that will leave you craving for more. Welcome to Story Talk, where stories come alive." />
                    <AppSmButton text="Create Story" style={{ marginTop: '44px' }} />
                </Col>
                <Col span={9}></Col>
            </Row>
        </div>
    )
}
export default CreateStory;