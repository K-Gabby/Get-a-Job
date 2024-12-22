import React from "react";
import "../styles/components/JobCard.css"

const JobCard = ({title, location, company}) => {
    return (
        <div className="job-card">
            <h2>{title}</h2>
            <p>{company}</p>
            <span>{location}</span>
            <button>Apply Now</button>
        </div>
    );
};

export default JobCard;