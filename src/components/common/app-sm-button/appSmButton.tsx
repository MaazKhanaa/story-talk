import './smbutton.scss';

const AppSmButton = (props: any) => {
    const { text } = props;
    return (
        <button className='appSmButtton'>
            {text}
        </button>
    )
};

export default AppSmButton;