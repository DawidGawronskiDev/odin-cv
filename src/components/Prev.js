import React from "react";

function Prev({ personalInfo, experience, education }) {
  return (
    <div className="prev">
      <div className="cv">
        <aside>
          <div>
            <h1>
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
          </div>

          <ul>
            <li>{personalInfo.address}</li>
            <li>{personalInfo.phone}</li>
            <li>{personalInfo.email}</li>
          </ul>

          <div>
            <h3>Description</h3>
            <blockquote>{personalInfo.desc}</blockquote>
          </div>
        </aside>

        <main>
          <h3>Experience</h3>
          <ul>
            {experience.map((place, index) => {
              return (
                <li key={index}>
                  <h4>{place.position}</h4>
                  <div className="inline">
                    <span>
                      {place.company}, {place.city}
                    </span>
                    <span>
                      {place.from} - {place.to}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          <h3>Education</h3>
          <ul>
            {education.map((place, index) => {
              return (
                <li key={index}>
                  <h4>{place.school}</h4>
                  <div className="inline">
                    <div>
                      <p>Subject: {place.subject}</p>
                      <p>Degree: {place.degree}</p>
                    </div>
                    <span>
                      {place.from} - {place.to}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Prev;
