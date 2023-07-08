import React from "react";

function ExperienceInput({
  experience,
  changeExperience,
  addExperience,
  deleteExperience,
}) {
  const handleChangeExperience = (index, propertyName, e) => {
    changeExperience(index, propertyName, e);
  };

  const handleAddExperience = () => {
    addExperience();
  };

  const handleDeleteExperience = (index) => {
    deleteExperience(index);
  };

  return (
    <fieldset>
      <legend>Experience</legend>
      {experience.map((place, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              placeholder="Position"
              value={place.position}
              onChange={(e) => handleChangeExperience(index, "position", e)}
            />
            <input
              type="text"
              placeholder="Company"
              value={place.company}
              onChange={(e) => handleChangeExperience(index, "company", e)}
            />
            <input
              type="text"
              placeholder="City"
              value={place.city}
              onChange={(e) => handleChangeExperience(index, "city", e)}
            />
            <input
              type="text"
              placeholder="From"
              value={place.from}
              onChange={(e) => handleChangeExperience(index, "from", e)}
            />
            <input
              type="text"
              placeholder="To"
              value={place.to}
              onChange={(e) => handleChangeExperience(index, "to", e)}
            />
            <button
              type="button"
              onClick={(index) => handleDeleteExperience(index)}
            >
              Delete Experience
            </button>
          </div>
        );
      })}
      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>
    </fieldset>
  );
}

export default ExperienceInput;
