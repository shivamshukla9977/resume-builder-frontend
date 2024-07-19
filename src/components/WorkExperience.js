import React from 'react';
import './../WorkExperience.css';

const WorkExperience = ({ user }) => (
  <div className="work-experience">
    <h3>WORK EXPERIENCE</h3>
    <div className="job">
      <ul>
        {user.jobs.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company_name} ({job.job_type})
            <br />
            <p>{job.start_from} - {job.leave_on ? job.leave_on : 'Present'}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default WorkExperience;
