import React, { useEffect, useState } from "react";
import {
  HOne,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import TopBar from "../../Application/TopBar/TopBar";
import StudentsRanking from "./RankingComponents/StudentsRanking";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import {
  alwaysWhite,
  primaryColor,
  textPrimaryColorContrast,
} from "../../Styles/Styles";
import RankingExplanation from "./RankingComponents/RankingExplanation";
import RankingTimeline from "./RankingComponents/RankingTimeline";
import { BackToHomePage } from "../../Resources/UniversalComponents";
import StudentsRankingTotal from "./RankingComponents/StudentsRankingTotal";

export default function Ranking({ headers, logged }) {
  const [value, setValue] = useState("1");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const theuser = JSON.parse(localStorage.getItem("loggedIn"));
    setUser(theuser);
  }, []);

  const componentsToRender = [
    {
      title: "Monthly Ranking",
      value: "1",
      component: <StudentsRanking headers={headers} />,
    },
    {
      title: "O que é?",
      value: "2",
      component: <RankingExplanation />,
    },
    {
      title: "Timeline",
      value: "3",
      component: (
        <RankingTimeline
          id={user.id}
          name={user.name + " " + user.lastname}
          headers={headers}
        />
      ),
    },
    {
      title: "Totais",
      value: "4",
      component: (
        <StudentsRankingTotal
          id={user.id}
          name={user.name + " " + user.lastname}
          headers={headers}
        />
      ),
    },
  ];
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      <TopBar />
      <RouteSizeControlBox className="smooth" style={{ maxWidth: "70rem" }}>
        <RouteDiv>
          <HOne>Ranking</HOne>
          <TabContext value={value}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: alwaysWhite(),
                justifyContent: "space-between",
              }}
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {componentsToRender.map((component, index) => {
                  return (
                    <Tab
                      key={index + component.value}
                      style={{
                        fontWeight: 500,
                        backgroundColor: textPrimaryColorContrast(),
                        color: primaryColor(),
                      }}
                      label={component.title}
                      value={component.value}
                    />
                  );
                })}
              </TabList>
            </Box>
            <BackToHomePage />
            {componentsToRender.map((component, index) => {
              return (
                <TabPanel
                  style={{
                    padding: 0,
                    margin: "1rem auto",
                    maxWidth: "1000px",
                  }}
                  key={index + component.value}
                  value={component.value}
                >
                  {component.component}
                </TabPanel>
              );
            })}
          </TabContext>
        </RouteDiv>
      </RouteSizeControlBox>
    </>
  );
}
