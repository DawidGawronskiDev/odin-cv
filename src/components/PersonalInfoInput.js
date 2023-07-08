import React from "react";

function PersonalInfoInput({ personalInfo, changePersonalInfo }) {
  return (
    <fieldset>
      <legend>Personal Info</legend>
      <input
        type="text"
        maxLength={13}
        placeholder="First Name"
        value={personalInfo.firstName}
        onChange={(e) => changePersonalInfo("firstName", e)}
      />
      <input
        type="text"
        maxLength={13}
        placeholder="Last Name"
        value={personalInfo.lastName}
        onChange={(e) => changePersonalInfo("lastName", e)}
      />
      <input
        type="text"
        placeholder="Address"
        value={personalInfo.address}
        onChange={(e) => changePersonalInfo("address", e)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={personalInfo.phone}
        onChange={(e) => changePersonalInfo("phone", e)}
      />
      <input
        type="text"
        maxLength={13}
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) => changePersonalInfo("email", e)}
      />
      <textarea
        placeholder="Description"
        value={personalInfo.desc}
        onChange={(e) => changePersonalInfo("desc", e)}
      />
    </fieldset>
  );
}

export default PersonalInfoInput;
