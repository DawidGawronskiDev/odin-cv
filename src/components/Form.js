import React from "react";

import PersonalInfoInput from "./PersonalInfoInput";

function Form({
    personalInfo,
    changePersonalInfo}) {
    return (
        <form>
            <PersonalInfoInput 
                personalInfo={personalInfo}
                changePersonalInfo={changePersonalInfo}
            />
        </form>
    )
}

export default Form