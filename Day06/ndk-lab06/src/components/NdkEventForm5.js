import React, { Component } from 'react'

export default class NdkEventForm5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkName: "Duy  Khánh",
            ndkAge: 20,
            ndkGender: "Male",
            ndkCourse: "CSS3"
        }
    }

    // hàm sự kiện change
    ndkHandleChage = (event) => {
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]: value
        })
    }

    ndkHandleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.ndkName + "\n"
            + this.state.ndkAge + "\n"
            + this.state.ndkGender + "\n"
            + this.state.ndkCourse)

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onNdkHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info</h2>
                <div>
                    <label htmlFor='ndkName' >Student Name:</label>
                    <input type='text' name='ndkName' id='ndkName'
                        value={this.state.ndkName}

                        onChange={this.ndkHandleChage}
                        className='mx-2 text-center' />
                </div>
                <div>
                    <label htmlFor='ndkAge' >Student Name:</label>
                    <input type='text' name='ndkAge' id='ndkAge'
                        value={this.state.ndkAge}

                        onChange={this.ndkHandleChage}
                        className='mx-2 text-center ' />
                </div>

                <div>

                    <label htmlFor='ndkGender' >Student Gender:</label>
                    <input type='radio' name='ndkGender' id='ndkMale' className='mx-2'
                        value={'Male'}
                        checked={this.state.ndkGender === 'Male'}
                        onChange={this.ndkHandleChage} />
                    <label htmlFor='ndkMale'>Male</label>





                    <input type='radio' name='ndkGender' id='ndkFemale' className='mx-2'
                        value={'Female'}
                        checked={this.state.ndkGender === 'Female'}
                        onChange={this.ndkHandleChage} />

                    <label htmlFor='ndkFemale'>Female</label>



                    <input type='radio' name='ndkGender' id='ndkNone' className='mx-2'
                        value={'None'}
                        checked={this.state.ndkGender === 'None'}
                        onChange={this.ndkHandleChage} />
                    <label htmlFor='ndkNone'>None</label>

                </div>


                <div>
                    <label>
                        Chọn khóa học:
                        <select name='ndkCourse' id='ndkCourse' className='mx-2 text-center '
                            value={this.state.ndkCourse} onChange={this.ndkHandleChage}>
                            <option value={"HTML3"}>HTML3</option>
                            <option value="CSS3">CSS3</option>
                            <option value="JS">JavaScript</option>
                            <option value="reactjs">ReactJS</option>
                            <option value="BOOTRAP5">BOOTRAP5</option>
                        </select>
                    </label>
                </div>
                <button onClick={this.ndkHandleSubmit} className='btn btn-primary'>button</button>
            </div>
        )
    }
}