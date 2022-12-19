import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

type Notification = {
  descript: string,
  template: string,
  status: string
};

const NotifDialog = () => {
  //const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');

  // Add a state variable to hold the notification list
  const [notifications, setNotifications] = React.useState<Notification[]>([]); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const createNotification = (notification: Notification) => {
    axios.post(`http://localhost:8080/notification/postNotif`, notification)
      .then(() => {
        console.log(notification);
        handleClose();
        window.location.reload()
      })
  };

  // Add a useEffect hook to update the notification list after creating a new notification
  React.useEffect(() => {
    axios.get(`http://localhost:8080/notification/getNotif`) // Replace fetch with axios
      .then(response => response.data) // Use response.data instead of response.json()
      .then(data => setNotifications(data));; // Update the notification list state variable with the new data
  }, []); // The empty array tells the useEffect hook to only run the effect once, when the component is mounted

  return (
    <>
      <AddIcon onClick={handleClickOpen} sx={{ marginLeft: 80, marginTop: -3, color: 'black' }} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter a New Statement</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To customize, add a new notification statement made by you.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Text"
            type="text"
            fullWidth
            value={text}
            onChange={handleTextChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => createNotification({ descript: text, template: '', status:''
        })} color="primary">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NotifDialog;
