import React from "react";

function Prev({
    personalInfo,
    experience}) {
    return (
        <>
            <h1>{personalInfo.firstName}</h1>
            <h1>{experience[0].position}</h1>
        </>
    )
}

export default Prev