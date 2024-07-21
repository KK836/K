import React, { FC } from "react";

interface ScreenProps {
    message: string;
    history: any;
    match: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {
    const onClickGoback = () => {
        props.history.goBack();
    };
}

return (
    <div>
        <div>{"Your id is " + props.match.params.userid}</div>
    <div>{PaymentResponse.message}
    </div>
    </div>
    
)

interface ScreenCProps {
    message: string;
}

const ScreenC: FC<ScreenCProps> = ({ message }) => {
    return <div>{message}</div>
};

export default ScreenC;