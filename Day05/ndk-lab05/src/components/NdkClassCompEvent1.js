import React, { Component } from 'react'

export default class NdkClassCompEvent1 extends Component {
    // Hàm sử lí sự kiện
    ndkEventHandClick1 = () => {
        alert("Button 1 - Clicked");

    }
    ndkEventHandClick2 = () => {
        alert("Button 2 - Clicked");

    }

    render() {
        return (
            <div className='alert alert-info'>
                <button className='btn btn-primary mx-1' onClick={this.ndkEventHandClick1}>Button1</button>
                <button className='btn btn-primary mx-2' onClick={this.ndkEventHandClick2("Duy Khánh")}>Button2</button>

            </div>
        )
    }
}
