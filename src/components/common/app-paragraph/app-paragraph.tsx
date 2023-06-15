import React from 'react'


import "./app-paragraph.scss";

const AppParagraph = (props: any) => {

    const { text, className } = props;

    return (
        <p className={`${className} app-paragraph-wrapper`}>{text}</p>
    )
}

export default AppParagraph