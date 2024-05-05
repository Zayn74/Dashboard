import React from 'react'
// import FullCalendar from '@fullcalendar/react';
import  FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import Header from '../../components/Header'; 
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from '../../theme';


export default function Calendar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [CurrentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
    const title = prompt("please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    
        if (title) {
          calendarApi.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
          });
        }
    }
    const handelEventClick = (selected) => {
        if (
            window.confirm(
                `are you sure you want delete this event ${selected.event.title}`
            )
        ) {
          selected.event.remove();
        }
    }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subTitle="FullCalendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* calendar side bar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {CurrentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* calendar */}
        <Box flex="1 1 100%" ml="10px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handelEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day-event", date: "2024-5-1" },
              { id: "4321", title: "Timed event", date: "2024-5-13" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}
