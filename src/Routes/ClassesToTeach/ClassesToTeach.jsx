import React from "react";
import { RouteSizeControlBox } from "../../Resources/Components/RouteBox";
import { Link } from "react-router-dom";
import { CourseCard } from "./ClassesToTeach.Styled";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";

const courses = [
  {
    title: "Phrasal verbs",
    img: "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/weekend.jpg?updatedAt=1688471773704",
    link: "/phrasal-verbs",
  },
  {
    title: "The Beauty of Complexity",
    img: "https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc8910000/iguazu-falls-stock.jpg?update-time=1677089883729&size=responsive970",
    link: "https://the-beauty-of-complexity.netlify.app/",
  },
  {
    title: "The Smartest Dog Breed",
    img: "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/malinoisbg.jpg?updatedAt=1687867713745",
    link: "https://smartest-dog-breed.netlify.app/",
  },
];

export default function ClassesToTeach() {
  return (
    <RouteSizeControlBox
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          maxWidth: "70rem",
          justifyContent: "space-evenly",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
        }}
      >
        {courses.map((course, index) => {
          return (
            <Link key={index} to={course.link} target="_blank">
              <CourseCard>
                <h3>{course.title}</h3>
                <img
                  style={{
                    height: "240px",
                    width: "240px",
                    objectFit: "cover",
                    objectPosition: "left",
                  }}
                  src={course.img}
                  alt=""
                />
              </CourseCard>
            </Link>
          );
        })}{" "}
      </div>
    </RouteSizeControlBox>
  );
}
