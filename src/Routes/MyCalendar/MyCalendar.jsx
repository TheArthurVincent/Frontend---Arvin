import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import TopBar from "../../Application/TopBar/TopBar";
import {
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
} from "../../Styles/Styles";

export function MyCalendar({ headers }) {
  const localizer = momentLocalizer(moment);

  const startDate = new Date(2024, 1, 13, 10, 0); // Por exemplo, 12 de fevereiro de 2024 às 10:00

  // Data final do evento recorrente (por exemplo, 31 de dezembro de 2024)
  const endDate = new Date(2024, 11, 31, 10, 0); // Mês é indexado a partir de zero, então 11 representa dezembro

  // Adicionando eventos recorrentes semanalmente

  const events = [
    {
      title: "Reunião",
      start: new Date(2024, 1, 12, 10 /*hora*/, 0 /*minuto*/),
      end: new Date(2024, 1, 12, 14 /*hora*/, 0 /*minuto*/),
    },
    {
      title: "Evento Importante",
      start: new Date(2024, 1, 14, 12, 0),
      end: new Date(2024, 1, 14, 15, 0),
    },
  ];

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 7)) {
    events.push({
      title: "Evento Recorrente",
      start: new Date(d),
      end: new Date(d.getTime() + 2 * 60 * 60 * 1000), // Adicionando 2 horas à data de início para definir a data de término
    });
  }

  useEffect(() => {
    console.log(events);
  }, []);
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
            style={{
              margin: "1rem",
              color: primaryColor(),
              backgroundColor: textPrimaryColorContrast(),
            }}
          />
        </RouteDiv>
      </RouteSizeControlBox>
    </>
  );
}

export default MyCalendar;
