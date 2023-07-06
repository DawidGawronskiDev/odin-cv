import React, {Component} from "react";

import Form from "./Form";
import Prev from "./Prev";

class Main extends Component {
    constructor() {
        super()

        this.state = {
            personalInfo : {
                firstName: "",
                lastName: "",
                address: "",
                phone: "",
                email: "",
            }
        }
    }

    changePersonalInfo = (propertyName, e) => {

        const updatedPersonalInfo = this.state.personalInfo;

        updatedPersonalInfo[propertyName] = e.target.value;

        this.setState({
            personalInfo: updatedPersonalInfo,
        })
    }

    render() {
        return (
            <main>
                <Form 
                personalInfo={this.state.personalInfo}
                changePersonalInfo={this.changePersonalInfo}
                />
                <Prev personalInfo={this.state.personalInfo} />
            </main>
        )
    }
}

export default Main