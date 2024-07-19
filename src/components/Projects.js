import React from 'react';
import './../Projects.css';

const Projects = ({ user }) => (
  <div className="project">
    <h3>Projects</h3>
    <ul>
      {user.projects.map(project => (
        <li key={project.id}>
          <strong>{project.title}</strong>: {project.description} (Duration: {project.duration})
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
