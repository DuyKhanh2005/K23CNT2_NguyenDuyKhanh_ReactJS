import React from 'react'

export default function NdkFuncCompEventProps(props) {
    //Hàm xử lý sự kiện
    const ndkHanldeButtonClick1 = () => {
        alert("Dữ liệun từ props:" + props.ndkRenderName);
        console.log("Xin Chào:", props.ndkRenderName);
    }
    const ndkHanldeButtonClick2 = (param) => {
        //Lấy dữ liệu từ props
        alert("Dữ liệun từ props (Button 2 click):" + props.ndkRenderName);
        //Dữ liệu tham số
        console.log('======================================');
        console.log("Hi:", param);
        console.log('======================================');
    }
    return (
        <div className='alert alert-danger'>
            <button className='btn btn-primary mx-1'
                onClick={ndkHanldeButtonClick1}> Button 1</button>
            <button className='btn btn-primary mx-1'
                onClick={() => ndkHanldeButtonClick2("Button 2")}> Button 2</button>
        </div>
    )
}
