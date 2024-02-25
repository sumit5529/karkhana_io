import React from "react";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";

const HomePage = () => {
  return (
    <div className="holder">
      <CoursesList />
      <CategoriesList />
    </div>
  );
};

export default HomePage;
