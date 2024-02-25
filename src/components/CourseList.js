import React, { useContext } from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { CoursesContext } from "../context/courses_context";

const CourseList = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <CoursesListWrapper>
      <div className="container">
        <Tabs courses={courses} />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
