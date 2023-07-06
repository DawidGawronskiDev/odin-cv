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
            <p>{personalInfo.desc}</p>
          </div>
        </aside>

        <main>
          <h3>Experience</h3>
          <ul>
            {experience.map((place) => {
              return (
                <li>
                  <span>{place.position}</span>
                  <div>
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
        </main>
      </div>
    </div>
  );
}

export default Prev;
