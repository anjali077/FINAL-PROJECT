import React from "react";
import "./Course.css";
import { Link } from "react-router-dom";



const courses = [
  { id: 1, title: "Web Development Bootcamp", price: "$19.99" },
  { id: 2, title: "React for Beginners", price: "$14.99" },
  { id: 3, title: "Python Programming Mastery", price: "$9.99" },
  { id: 4, title: "Graphic Design Essentials", price: "$12.99" },
];

const Course = () => {
  return (
    <section className="course-grid">
      <h2>Featured Courses</h2>
      <div className="courses">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.price}</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
   
    </section>
  );
};


export default Course;
