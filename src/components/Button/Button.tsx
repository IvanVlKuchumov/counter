import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const onClickHandler = () => {
      props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};