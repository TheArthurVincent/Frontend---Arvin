import React, { useEffect, useState } from "react";
import {
  HOne,
  HThree,
  HTwo,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";
import generalClasses from "../../assets/mockdata/universalcontent.json";
import { Link } from "react-router-dom";
import {
  ButtonDisapear,
  backDomain,
  formatData,
  formatDate,
  linkReset,
} from "../../Resources/UniversalComponents";
import {
  darkGreyColor,
  primaryColor,
  textPrimaryColorContrast,
} from "../../Styles/Styles";
import { Button, CircularProgress } from "@mui/material";
import TopBar from "../../Application/TopBar/TopBar";
import axios from "axios";

export function MyCalendar() {
  const { UniversalTexts } = useUserContext();
  const [selectedOption, setSelectedOption] = useState("private");
  const [_StudentId, setStudentId] = useState("");
  const [nextTutoring, setNextTutoring] = useState({
    nextTutoring: {
      studentID: "oi",
      date: "",
      time: "",
      meetingUrl: "/",
    },
  });
  useEffect(() => {
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn"));
    setStudentId(getLoggedUser.id || _StudentId);
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSeeIsNextClassVisibleModal = () => {
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn"));
    setStudentId(getLoggedUser.id || _StudentId);
    const fetchNextClass = async () => {
      try {
        const response = await axios.get(
          `${backDomain}/api/v1/nexttutoring/${_StudentId}`
        );
        setNextTutoring(response.data);
      } catch (error) {
        alert("Erro ao importar próximas aulas");
      }
    };

    fetchNextClass();
    setIsNextClassVisible(!isNextClassVisible);
  };

  useEffect(() => {
    handleSeeIsNextClassVisibleModal;
  }, []);

  return (
    <>
      <TopBar />
      <RouteSizeControlBox className="smooth">
        <RouteDiv>
          <Button onClick={handleSeeIsNextClassVisibleModal}>
            Ver próxima aula particular
          </Button>
          <p>{nextTutoring.nextTutoring.studentID}</p>
          <p>{nextTutoring.nextTutoring.date}</p>
          <p>{nextTutoring.nextTutoring.time}</p>
          <p>{nextTutoring.nextTutoring.meetingUrl}</p>
          <Button onClick={handleSeeIsNextClassVisibleModal}>
            Ver próximas aulas ao vivo
          </Button>
          <p>{nextTutoring.nextTutoring.studentID}</p>
          <p>{nextTutoring.nextTutoring.date}</p>
          <p>{nextTutoring.nextTutoring.time}</p>
          <p>{nextTutoring.nextTutoring.meetingUrl}</p>
        </RouteDiv>
      </RouteSizeControlBox>
    </>
  );
}

export default MyCalendar;
