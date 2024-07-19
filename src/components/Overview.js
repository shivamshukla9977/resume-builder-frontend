import React from 'react';
import './../Overview.css';

const Overview = ({ user }) => (
  <div className="overview">
    <h3>OVERVIEW</h3>
    <ul>
      {user.overviews.map(overview => (
        <li key={overview.id}>
          {overview.summary}
        </li>
      ))}
    </ul>
  </div>
);

export default Overview;
