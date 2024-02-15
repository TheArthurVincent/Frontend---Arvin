import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HOne,
  NextLive,
  OverFlow,
} from "../../../Resources/Components/RouteBox";
import { backDomain, formatDate } from "../../../Resources/UniversalComponents";
import { CircularProgress, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import {
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../../../Styles/Styles";
import { useUserContext } from "../../../Application/SelectLanguage/SelectLanguage";

export function NextLiveClasses({ headers }) {
  const { UniversalTexts } = useUserContext();
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("0");

  const isWithinOneHour = (dateTime) => {
    const currentTime = new Date().getHours();
    const currentDay = new Date().getDate();
    const eventTime = new Date(dateTime).getHours();
    const eventDay = new Date(dateTime).getDate();

    return currentTime - eventTime === 0 && currentDay - eventDay === 0
      ? true
      : false;
  };

  const seeAllTutorings = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backDomain}/api/v1/liveclasses`, {
        headers,
      });
      if (response.data.pastLiveClasses && response.data.futureLiveClasses) {
        setPast(response.data.pastLiveClasses);
        setFuture(response.data.futureLiveClasses);
      } else {
        console.error(
          "Invalid response structure: pastLiveClasses or futureLiveClasses is undefined"
        );
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Erro ao listar aulas do mês");
      setLoading(false);
    }
  };

  useEffect(() => {
    seeAllTutorings();
  }, []);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <NextLive style={{ margin: "0 auto" }}>
      <HOne>{UniversalTexts.groupClasses}</HOne>
      <OverFlow>
        {loading ? (
          <CircularProgress />
        ) : (
          future.map((item, index) => (
            <div
              style={{
                margin: "1rem",
                backgroundColor: isWithinOneHour(item.dateTime)
                  ? secondaryColor()
                  : primaryColor(),
                color: textPrimaryColorContrast(),
                margin: "1px",
                padding: "8px",
              }}
              key={index}
            >
              {isWithinOneHour(item.dateTime) ? (
                <p
                  style={{
                    backgroundColor: secondaryColor(),
                    color: textSecondaryColorContrast(),
                    padding: "5px",
                  }}
                >
                  <LinearProgress />
                </p>
              ) : null}
              <p>
                {item.title} <br />
                <Link
                  target="_blank"
                  style={{ color: "white" }}
                  to={item.meetingUrl}
                >
                  {formatDate(item.dateTime)}
                </Link>
              </p>
            </div>
          ))
        )}
      </OverFlow>
    </NextLive>
  );
}

export default NextLiveClasses;
