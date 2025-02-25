import React, { Component } from "react";

class NdkEventForm4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkSelectCheckBox: ["Apple"], // Trái cây mặc định đã chọn
        };
    }

    // Hàm xử lý khi chọn checkbox
    ndkHandleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        let selected = [...this.state.ndkSelectCheckBox];

        // Nếu chọn checkbox, thêm vào mảng; nếu bỏ chọn, loại bỏ khỏi mảng
        const selectedOptions = checked
            ? [...selected, value]
            : selected.filter((option) => option !== value);

        console.log("selected:", selected, "selectedOptions:", selectedOptions);

        this.setState(
            {
                ndkSelectCheckBox: selectedOptions,
            },
        );
    };

    // Hàm xử lý khi form được submit
    ndkHandleSubmit = (event) => {
        event.preventDefault();
        const { ndkSelectCheckBox } = this.state;
        console.log("Fruits selected:", ndkSelectCheckBox);

        alert("Selected fruits: " + ndkSelectCheckBox.join(", "));
    };

    render() {
        return (
            <div className="alert alert-success">
                <h2> Form input - checkbox</h2>
                <form onSubmit={this.ndkHandleSubmit}>
                    <h3>Select your favorite fruits</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="apple"
                            value="Apple"
                            checked={this.state.ndkSelectCheckBox.includes("Apple")}
                            onChange={this.ndkHandleCheckboxChange}
                        />
                        <label htmlFor="apple">Apple</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="banana"
                            value="Banana"
                            checked={this.state.ndkSelectCheckBox.includes("Banana")}
                            onChange={this.ndkHandleCheckboxChange}
                        />
                        <label htmlFor="banana">Banana</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="orange"
                            value="Orange"
                            checked={this.state.ndkSelectCheckBox.includes("Orange")}
                            onChange={this.ndkHandleCheckboxChange}
                        />
                        <label htmlFor="orange">Orange</label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default NdkEventForm4;