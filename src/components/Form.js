import React from "react";

import PersonalInfoInput from "./PersonalInfoInput"
import ExperienceInput from "./ExperienceInput";

function Form({
    personalInfo,
    changePersonalInfo,
    experience,
    changeExperience,
    addExperience,
    deleteExperience}) {
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
        </form>
    )
}

export default Form