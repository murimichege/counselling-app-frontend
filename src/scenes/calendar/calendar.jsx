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
import SessionsApi from '../../api/session/session'
import toast, { Toaster } from "react-hot-toast";


const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [formData, setFormData] = useState({
    currentEvents:[],
    clientName: "",
    clientEmail:"",
    counsellor:"",
    selectedDate:"",
    receptionist:"",
    location:"",
    meetingLink:"",
    isOnline:false,
  })
  const [drawerOpen, setDrawerOpen] = useState(false);


  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDateClick = (selected) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: selected
    }))

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

  const handleFetchSessions  =async () => {


  }
 const  createNewEvent = async () => {
  try {
  
    const response =  await SessionsApi.create(formData);
    console.log("response", response);
    toast.success(`Session created successfully! <br> Both the counselor and the client have been alerted`);
  } catch (error) {
    console.error("Error:", error);
    toast.error("Failed to create counseling session. Please contact IT support");
  }
 }
  const handleAddEvent = () => {
    if (formData.selectedDate && formData.clientEmail && formData.counsellor) {
      const { startStr, endStr, allDay } = formData.selectedDate;
      const calendarApi = formData.selectedDate.view.calendar;
      calendarApi.unselect();

     const newEvent = {
        id: `${startStr}-${formData.clientName}`,
        clientName: formData.clientName,
        counsellor: formData.counsellor,
        clientEmail: formData.clientEmail,
        receptionist:  formData.receptionist,
        location: formData.location,
        meetingLink: formData.meetingLink,
        start: startStr,
        end: endStr,
        allDay,
      };
      calendarApi.addEvent(newEvent)
      setFormData({
        ...formData, 
        clientName: "",
        clientEmail:"",
        counsellor:"",
        selectedDate:"",
        receptionist:"",
        location:"",
        meetingLink:"",
        isOnline:false,

      })
      createNewEvent()
      handleDrawerClose();

    }
  };
  const handleInputChange = (event) => {
    if (event && event.target && event.target.name) {
      const { name, value } = event.target;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Schedule Counseling Sessions" />
        {/* Drawer for Event Input */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box p="20px" width="300px">
          <Typography variant="h6">Create a New Session</Typography>
          
     

       <InputLabel id="counsellor-label">Counselor</InputLabel>
          <Select
            labelId="counsellor-label"
            id="counsellor"
            name="counsellor"
            value={formData.counsellor}
            onChange={handleInputChange}
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
            value={formData.clientName}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
   <TextField
            label="Client Email"
            name="clientEmail"
            value={formData.clientEmail}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />      
              <TextField
            label="Receptionist"
            name="receptionist"
            value={formData.receptionist}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          
<InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          >
            <MenuItem aria-required value="Counseling Center">Counseling Center</MenuItem>
            <MenuItem aria-required value="Online">Online</MenuItem>
          </Select>

          {
            formData.isOnline ? (
              <TextField
              label="Meeting Link"
              name="meetingLink"
              value={formData.meetingLink}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            ) : (
              <TextField
              label="Meeting Link"
              name="meetingLink"
              value={formData.meetingLink}
              onChange={handleInputChange}
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
            {formData.currentEvents.map((event) => (
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
            eventsSet={handleInputChange}
            // initialEvents={[
            //   {
            //     id: "12315",
            //     title: "Session with Eddie",
            //     date: "2023-08-22  15:00",
            //   },
            //   {
            //     id: "5123",
            //     title: "Session with Staff",
            //     date: "2023-08-22  14:00",
            //   },
            // ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
