import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import TopBar from "../../Application/TopBar/TopBar";

export function MyCalendar({ headers }) {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "Reunião",
      start: new Date(2024, 1, 12, 10, 0),
      end: new Date(2024, 1, 12, 12, 0),
    },
    {
      title: "Evento Importante",
      start: new Date(2024, 1, 14, 12, 0),
      end: new Date(2024, 1, 14, 15, 0),
    },
  ];
  return (
    <>
      <TopBar />
      <RouteSizeControlBox>
        <RouteDiv>
          {" "}
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ margin: "1rem" }}
          />
        </RouteDiv>
      </RouteSizeControlBox>
    </>
  );
}

export default MyCalendar;
