import React from "react";

function ExperienceInput({
    experience,
    changeExperience,
    addExperience,
    deleteExperience}) {

    const handleAddExperience = () => {
        addExperience();
    }

    const handleDeleteExperience = (index) => {
        deleteExperience(index);
    }

    return (
        <fieldset>
            <legend>Experience</legend>
            {
                experience.map((place, index) => {
                    return (
                        <div>
                            <input 
                                type="text" 
                                placeholder="Position"
                                onChange={(e) =>changeExperience(index, "position", e)}
                            />
                            <input 
                                type="text" 
                                placeholder="Comapny"
                                onChange={(e) =>changeExperience(index, "company", e)}
                            />
                            <input 
                                type="text" 
                                placeholder="City"
                                onChange={(e) =>changeExperience(index, "city", e)}
                            />
                            <input 
                                type="text" 
                                placeholder="From"
                                onChange={(e) =>changeExperience(index, "Form", e)}
                            />
                            <input 
                                type="text" 
                                placeholder="To"
                                onChange={(e) =>changeExperience(index, "to", e)}
                            />
                            <button 
                                type="button"
                                onClick={(index) => handleDeleteExperience(index)}>
                                Delete Experience
                            </button>
                        </div>
                    )
                })
            }
            <button 
                type="button"
                onClick={handleAddExperience}>
                Add Experience
            </button>
        </fieldset>
    )
}

export default ExperienceInput