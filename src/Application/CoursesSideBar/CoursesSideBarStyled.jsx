import { styled } from "styled-components";
import {
  secondaryContrast,
  darkGreyColor,
  primaryContrast,
  transparentBg,
  primaryColor,
  alwaysWhite,
  textPrimaryColorContrast,
  transparentBg2,
} from "../../Styles/Styles";

export const CoursesListContainer = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
  top: 5rem;
  z-index: 2;
  transition: left 0.2s ease-out;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const CoursesListTitleContainer = styled.div`
  background-color: ${primaryContrast()};
  color: ${secondaryContrast()};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  cursor: pointer;
  &:hover {
    background-color: ${primaryColor()};
    color: ${textPrimaryColorContrast()};
  }
`;

export const CoursesList = styled.ul`
  padding: 0;
`;

export const CoursesListItem = styled.li`
  background-color: ${darkGreyColor()};
  color: ${alwaysWhite()};
  list-style: none;
  margin: 2px;
  align-items: center;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: left;
  justify-content: space-between;
  border: solid 1px ${darkGreyColor()};
  cursor: pointer;
  &:hover {
    background-color: ${primaryColor()};
    color: ${textPrimaryColorContrast()};
  }
`;

export const CoursesListInnerContainer = styled.div`
  width: 250px;
  background-color: ${darkGreyColor()};
`;

export const Mask = styled.div`
  background-color: ${transparentBg2()};
  width: 10000px;
`;
export const ArrowStyle = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
  margin: 0;
`;