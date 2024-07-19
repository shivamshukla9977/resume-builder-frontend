import React from 'react';
import './../Header.css';

const Header = ({ user }) => {
  const linkedinLink = user.links.find(link => link.title === 'LinkedIn');

  return (
    <div className="header">
      <h1>{user.first_name} {user.last_name}</h1>
      <div className="contact-info">
        <p>📧 {user.email}</p>
        <p>📞 123 444 555</p>
        <p>📍 {user.city}, {user.state}, {user.country}</p>
        {linkedinLink ? (
          <p>🔗 <a href={linkedinLink.link}>{linkedinLink.link}</a></p>
        ) : (
          <p>LinkedIn link not found</p>
        )}
      </div>
    </div>
  );
};

export default Header;
