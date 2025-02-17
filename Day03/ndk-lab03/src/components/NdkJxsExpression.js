import React from 'react'

export default function NdkJxsExpression() {
    //biến
    const name = "Nguyễn Duy Khánh";

    const user = {
        firstName: "Duy",
        lastName: "Khánh"
    }

    //hàm
    const fullName = (user) => {
        return user.firstName + '' + user.lastName;
    }

    //element
    const element = (
        <div>
            {/*Biểu thức Jsx*/}
            <h2> {fullName(user)} </h2>
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );

    //Hàm
    const sayWelcome = (name) => {
        if (name) {
            return <h3> Welcome to {name}</h3>
        } else {
            return <h3> Welcome to Fit-NTU K23CNT2</h3>
        }
    }
    return (
        <div>
            <h1>NDK - JSX Expression</h1>
            {/* sử dụng biến */}
            {element}

            <hr />
            {sayWelcome()}
            <hr />
            {sayWelcome("Nguyễn Duy Khánh")}
        </div>
    )
}
