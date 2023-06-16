import './contentparagraph.scss';

const ContentParagraph = (props: any) => {
    const { text } = props;
    return (
        <p className='contentParagraph'>{text}</p>
    )
}

export default ContentParagraph;