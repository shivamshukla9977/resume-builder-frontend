import React from 'react';
import './../Education.css';

const Education = ({ user }) => (
  <div className="education">
    <h3>EDUCATION</h3>
    <ul>
      {user.educations.map(education => (
        <li key={education.id}>
          <strong>{education.title}</strong> at {education.organisation} ({education.start_year} - {education.finish_year})
        </li>
      ))}
    </ul>
  </div>
);

export default Education;
