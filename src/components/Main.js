import React, { Component } from "react";

import Form from "./Form";
import Prev from "./Prev";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        desc: "",
      },
      experience: [
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
      education: [
        {
          school: "",
          subject: "",
          degree: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    };
  }

  changePersonalInfo = (propertyName, e) => {
    const updatedPersonalInfo = this.state.personalInfo;
    updatedPersonalInfo[propertyName] = e.target.value;

    this.setState({
      personalInfo: updatedPersonalInfo,
    });
  };

  changeExperience = (index, properyName, e) => {
    const updatedExperience = this.state.experience;
    updatedExperience[index][properyName] = e.target.value;

    this.setState({
      experience: updatedExperience,
    });
  };

  addExperience = () => {
    const updatedExperience = [
      ...this.state.experience,
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ];

    this.setState({
      experience: updatedExperience,
    });
  };

  deleteExperience = (index) => {
    const updatedExperience = [...this.state.experience];
    updatedExperience.splice(index, 1);

    this.setState({
      experience: updatedExperience,
    });
  };

  changeEducation = (index, properyName, e) => {
    const updatedEducation = this.state.education;
    updatedEducation[index][properyName] = e.target.value;

    this.setState({
      education: updatedEducation,
    });
  };

  addEducation = () => {
    const updatedEducation = [
      ...this.state.education,
      {
        school: "",
        subject: "",
        degree: "",
        city: "",
        from: "",
        to: "",
      },
    ];

    this.setState({
      education: updatedEducation,
    });
  };

  deleteEducation = (index) => {
    const updatedEducation = [...this.state.education];
    updatedEducation.splice(index, 1);

    this.setState({
      education: updatedEducation,
    });
  };

  loadExample = () => {
    const updatedInfo = {
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        address: "Example Street 21",
        phone: "123456789",
        email: "johndoe@gmail.com",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      experience: [
        {
          position: "Senior Web Developer",
          company: "Krusty Krab",
          city: "Bikini Bottom",
          from: "2018",
          to: "Present",
        },
      ],
      education: [
        {
          school: "Manchester University",
          subject: "Computer Science",
          degree: "Master",
          city: "Manchester",
          from: "2015",
          to: "2018",
        },
      ],
    };

    this.setState({
      personalInfo: updatedInfo.personalInfo,
      experience: updatedInfo.experience,
      education: updatedInfo.education,
    });
  };

  render() {
    const { personalInfo, experience, education } = this.state;

    return (
      <main>
        <Form
          // personal info
          personalInfo={personalInfo}
          changePersonalInfo={this.changePersonalInfo}
          // experience
          experience={experience}
          changeExperience={this.changeExperience}
          addExperience={this.addExperience}
          deleteExperience={this.deleteExperience}
          // education
          education={education}
          changeEducation={this.changeEducation}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
          // load example
          loadExample={this.loadExample}
        />
        <Prev
          personalInfo={personalInfo}
          experience={experience}
          education={education}
        />
      </main>
    );
  }
}

export default Main;
