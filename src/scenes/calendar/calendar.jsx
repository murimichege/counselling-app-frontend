import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Button,
  TextField,
  Typography,
  Select, 
  InputLabel,
  MenuItem,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const [counsellor, setCounsellor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [receptionist, setReceptionist] = useState("");
  const [location, setLocation] = useState();
  const [meetingLink, setMeetingLink] = useState("");
  const [isOnline, setIsOnline] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    handleDrawerOpen();
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleAddEvent = () => {
    if (selectedDate && clientEmail && counsellor) {
      const { startStr, endStr, allDay } = selectedDate;
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();

      calendarApi.addEvent({
        id: `${startStr}-${clientName}`,
        clientName,
        counsellor,
        clientEmail,
        receptionist,
        location,
        meetingLink,
        start: startStr,
        end: endStr,
        allDay,
      });

      handleDrawerClose();
      setSelectedDate(null);
      setClientName("");
      setClientEmail("")
      setCounsellor("");
      setReceptionist("");
      setLocation("");
      setMeetingLink("");
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value); 
  };
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Schedule Counseling Sessions" />
        {/* Drawer for Event Input */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box p="20px" width="300px">
          <Typography variant="h6">Create New Session</Typography>
          
     

       <InputLabel id="counsellor-label">Counselor</InputLabel>
          <Select
            labelId="counsellor-label"
            id="counsellor"
            value={counsellor}
            onChange={(e) => setCounsellor(e.target.value)}
            fullWidth
            required
            margin="normal"
          >
            <MenuItem value="Lucy">Lucy Kung'u</MenuItem>
            <MenuItem value="Lydia">Lydia Winda</MenuItem>
            <MenuItem value="Patrick">Patrick Obel</MenuItem>
            <MenuItem value="Adolphine">Adolphine Nyandoro</MenuItem>
          </Select>
          <TextField
            label="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
   <TextField
            label="Client Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />      
              <TextField
            label="Receptionist"
            value={receptionist}
            onChange={(e) => setReceptionist(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          
<InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            value={location}
            onChange={handleLocationChange}
            fullWidth
            margin="normal"
          >
            <MenuItem aria-required value="Counseling Center">Counseling Center</MenuItem>
            <MenuItem aria-required value="Online">Online</MenuItem>
          </Select>

          {
            isOnline ? (
              <TextField
              label="Meeting Link"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            ) : (
              <TextField
              label="Meeting Link"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              fullWidth
              disabled
              required
              margin="normal"
            />
            )
          }
         
          <Button variant="contained" color="primary" onClick={handleAddEvent}>
            Schedule Session
          </Button>
        </Box>
      </Drawer>

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          
          <Typography variant="h5">Counseling Sessions </Typography>
          <List>
            {currentEvents.map((event) => (
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

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
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
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "Session with Eddie",
                date: "2023-08-22  15:00",
              },
              {
                id: "5123",
                title: "Session with Staff",
                date: "2023-08-22  14:00",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
