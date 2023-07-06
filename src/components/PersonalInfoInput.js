import React from "react";

function PersonalInfoInput({ personalInfo, changePersonalInfo }) {
  return (
    <fieldset>
      <legend>Personal Info</legend>
      <input
        type="text"
        maxLength={13}
        placeholder="First Name"
        onChange={(e) => changePersonalInfo("firstName", e)}
      />
      <input
        type="text"
        maxLength={13}
        placeholder="Last Name"
        onChange={(e) => changePersonalInfo("lastName", e)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => changePersonalInfo("address", e)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => changePersonalInfo("phone", e)}
      />
      <input
        type="text"
        maxLength={13}
        placeholder="Email"
        onChange={(e) => changePersonalInfo("email", e)}
      />
    </fieldset>
  );
}

export default PersonalInfoInput;
