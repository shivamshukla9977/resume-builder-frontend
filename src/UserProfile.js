// src/components/UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h1>{user.first_name} {user.last_name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.city}, {user.state}, {user.country}</p>

      <h2>Educations</h2>
      <ul>
        {user.educations.map(education => (
          <li key={education.id}>
            <strong>{education.title}</strong> at {education.organisation} ({education.start_year} - {education.finish_year})
          </li>
        ))}
      </ul>

      <h2>Skills</h2>
      <ul>
        {user.skills.map(skill => (
          <li key={skill.id}>{skill.title}</li>
        ))}
      </ul>

      <h2>Links</h2>
      <ul>
        {user.links.map(link => (
          <li key={link.id}><a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul>
        {user.projects.map(project => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description} (Duration: {project.duration})
          </li>
        ))}
      </ul>

      <h2>Overview</h2>
      <ul>
        {user.overviews.map(overview => (
          <li key={overview.id}>
            <strong>{overview.title}</strong>: {overview.summary}
          </li>
        ))}
      </ul>

      <h2>Jobs</h2>
      <ul>
        {user.jobs.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company_name} ({job.job_type})
            <br />
            {job.start_from} - {job.leave_on ? job.leave_on : 'Present'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
