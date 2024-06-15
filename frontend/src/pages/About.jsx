import React, { Component } from 'react';
import aboutData from '../components/about.json'; // Assuming the JSON file is in the same directory as your JSX file
import { Link } from 'react-router-dom';
import "../App.css"
import { FaLinkedin } from 'react-icons/fa'
class About extends Component {
  render() {
    return (
      <div>
        <h2 className='heading'>About Us</h2>
        <p>{aboutData.missionAndPurpose}</p>

        <h3>Our Website</h3>
        <p>{aboutData.ourWebsite}</p>

        <h3>Meet Our Team</h3>
        <ul>
          {aboutData.team.map((member, index) => (
            <li key={index}>
              <h4>{member.name + " "}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </h4>
             
            </li>
          ))}
        </ul>
        <h3>Get in Touch</h3>
        <p>{aboutData.GetinTouch} <Link to="/contactus">contact page.</Link>
        </p>
        {/* Add any additional sections as needed */}
      </div>
    );
  }
}

export default About;
