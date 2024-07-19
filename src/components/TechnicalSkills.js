import React from 'react';
import './../TechnicalSkills.css';

const TechnicalSkills = ({ user }) => (
  <div className="technical-skills">
    <h3>TECHNICAL SKILLS</h3>
    <ul>
      {user.skills.map(skill => (
        <li key={skill.id}>{skill.title}</li>
      ))}
    </ul>
  </div>
);

export default TechnicalSkills;
