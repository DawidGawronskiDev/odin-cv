import React from "react";

import PersonalInfoInput from "./PersonalInfoInput"
import ExperienceInput from "./ExperienceInput";
import EducationInput from "./EducationInput";

function Form({
    personalInfo,
    changePersonalInfo,
    experience,
    changeExperience,
    addExperience,
    deleteExperience,
    education,
    changeEducation,
    addEducation,
    deleteEducation}) {
    return (
        <form>
            <PersonalInfoInput 
                personalInfo={personalInfo}
                changePersonalInfo={changePersonalInfo}
            />
            <ExperienceInput
                experience={experience}
                changeExperience={changeExperience}
                addExperience={addExperience}
                deleteExperience={deleteExperience}
            />
            <EducationInput
                education={education}
                changeEducation={changeEducation}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
            />
        </form>
    )
}

export default Form