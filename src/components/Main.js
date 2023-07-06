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
            },
            experience: [
                {
                    position: "",
                    company: "",
                    city: "",
                    from: "",
                    to: "",
                }
            ]
        }
    }

    changePersonalInfo = (propertyName, e) => {
        const updatedPersonalInfo = this.state.personalInfo;
        updatedPersonalInfo[propertyName] = e.target.value;

        this.setState({
            personalInfo: updatedPersonalInfo,
        })
    }

    changeExperience = (index, properyName, e) => {
        const updatedExperience = this.state.experience;
        updatedExperience[index][properyName] = e.target.value;

        this.setState({
            experience: updatedExperience,
        })
    }

    addExperience = () => {
        const updatedExperience = 
            [...this.state.experience, {
                position: "",
                company: "",
                city: "",
                from: "",
                to: "",
            }];

        this.setState({
            experience: updatedExperience,
        })
    }

    deleteExperience = (index) => {
        const updatedExperience = [...this.state.experience];
        updatedExperience.splice(index, 1);

        this.setState({
            experience: updatedExperience,
        })
    }

    render() {
        return (
            <main>
                <Form 
                    // personal info
                    personalInfo={this.state.personalInfo}
                    changePersonalInfo={this.changePersonalInfo}
                    // experience
                    experience={this.state.experience}
                    changeExperience={this.changeExperience}
                    addExperience={this.addExperience}
                    deleteExperience={this.deleteExperience}
                />
                <Prev 
                    personalInfo={this.state.personalInfo}
                    experience={this.state.experience}
                />
            </main>
        )
    }
}

export default Main