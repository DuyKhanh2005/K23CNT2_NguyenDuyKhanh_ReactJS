import React from 'react';

export default function NdkFuncCompEvent1() {
    const ndkEvenButton1Click = () => {
        alert("Button 1 - Clicked");
    }

    const ndkEvenButton2Click = () => {
        alert("Button 2 - Clicked");
    }

    const ndkEvenButton3Click = (name) => {
        alert("Name: " + name);
    }


    return (

        <div className='alert alert-info'>
            <button className='btn btn-primary btn-sm' onClick={ndkEvenButton1Click}>
                Button 1
            </button>
            <button className='btn btn-success btn-sm' onClick={ndkEvenButton2Click}>
                Button 2
            </button>
            <button className='btn btn-warning btn-sm' onClick={() => ndkEvenButton3Click("Duy Khánh")}>
                Button 3
            </button>

        </div>
    );
}
