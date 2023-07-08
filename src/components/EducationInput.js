import React from "react";

function EducationInput({
  education,
  changeEducation,
  addEducation,
  deleteEducation,
}) {
  const handleChangeEducation = (index, propertyName, e) => {
    changeEducation(index, propertyName, e);
  };

  const handleAddEducation = () => {
    addEducation();
  };

  const handleDeleteEducation = (index) => {
    deleteEducation(index);
  };

  return (
    <fieldset>
      <legend>Education</legend>
      {education.map((place, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              placeholder="School"
              value={place.school}
              onChange={(e) => handleChangeEducation(index, "school", e)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={place.subject}
              onChange={(e) => handleChangeEducation(index, "subject", e)}
            />
            <input
              type="text"
              placeholder="Degree"
              value={place.degree}
              onChange={(e) => handleChangeEducation(index, "degree", e)}
            />
            <input
              type="text"
              placeholder="City"
              value={place.city}
              onChange={(e) => handleChangeEducation(index, "city", e)}
            />
            <input
              type="text"
              placeholder="From"
              value={place.from}
              onChange={(e) => handleChangeEducation(index, "from", e)}
            />
            <input
              type="text"
              placeholder="To"
              value={place.to}
              onChange={(e) => handleChangeEducation(index, "to", e)}
            />
            <button
              type="button"
              onClick={(index) => handleDeleteEducation(index)}
            >
              Delete Education
            </button>
          </div>
        );
      })}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>
    </fieldset>
  );
}

export default EducationInput;
