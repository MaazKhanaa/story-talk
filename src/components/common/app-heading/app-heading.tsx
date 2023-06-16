import React from 'react'

import "./app-heading.scss";


const AppHeading = (props: any) => {

    const { text } = props;

    return (
        <h2 className="app-heading-wrapper">{text}</h2>
    )
}

export default AppHeading