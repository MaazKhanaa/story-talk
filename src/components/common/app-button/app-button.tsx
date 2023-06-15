import React from 'react';

import "./app-button.scss";

const AppButton = (props: any) => {

    const { type, name, className } = props;


    return (
        <button type={type} className={`${className} app-button-wrapper`}>{name}</button>
    )
}

export default AppButton