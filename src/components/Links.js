import React from 'react';
import './../Links.css';

const Links = ({ user }) => (
  <div className="link">
    <h3>Links</h3>
    <ul>
      {user.links.map(link => (
        <li key={link.id}><a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
      ))}
    </ul>
  </div>
);

export default Links;
