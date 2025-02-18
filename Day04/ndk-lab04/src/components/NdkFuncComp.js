import React from 'react'

function NdkFuncComp(props) {
    return (
        <div>
            <h1>Demo: Funcion Components Props</h1>
            <p> Lấy dữ liệu props để hiển thị </p>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>company: {props.company}</p>
            <p>Note: {props.note}</p>
        </div>
    );
}

export default NdkFuncComp; 