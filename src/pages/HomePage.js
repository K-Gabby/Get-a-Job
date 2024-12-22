import React from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

const HomePage = () => {
    const jobs = [
        {title: "Software Engineer", location: "Remote", company: "Tech Corp"},
        {title: "Frontend Developer", location: "New York", company: "Creative Studio"},
        {title: "Product Designer", location: "New York", company: "Creative Studio"},
        {title: "Product Manager", location: "New York", company: "Creative Studio"},
        {title: "Brand Identity", location: "New York", company: "Creative Studio"},
        {title: "UI/UX Designer", location: "New York", company: "Creative Studio"},
        {title: "Backend Developer", location: "New York", company: "Creative Studio"},
        {title: "Graphics Designer", location: "New York", company: "Creative Studio"},
        {title: "DevOps Engineer", location: "New York", company: "Creative Studio"},
        {title: "Cloud Engineer", location: "New York", company: "Creative Studio"},
    ];

    return (
        <div>
            <Header/>
            <main>
              <h1 className="page-title">Find Your Dream Job</h1>
              <div className="job-list">
                {jobs.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage