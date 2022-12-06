import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotificationsList, { Notifs } from './components/NotificationsList';
import { Box, Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NotifDialog from './components/Dialog';
import EditNotif from './components/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function App() {

  const Notify: Notifs[] = [
    {img:'/dis.jpg', name:'Pamm Cañedo', desc:'left the campus'},
    {img:'/check.png', name:'John Benedict', desc:'added CSIT-321 course'},
    {img:'/check.png', name:'Benhur J Guia', desc:'entered the campus'},
    {img:'/check.png', name:'Ephraim Khirt', desc:'entered room 301'},
    {img:'/dis.jpg', name:'Josh Fedencio', desc:'just went home'},
  ]

  
  return (
    <div className="App">
      
      <header className="App-header">
         <div className='notif'>
          <Stack direction='column' spacing={1.5} 
          sx={{display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',  
          marginLeft: 30, 
          paddingBottom: 30}}>
            <Button variant='contained' sx={{marginRight: 55, marginTop: 10, marginBottom: 0}}> 
            Edit Notifications Statement </Button> 
            
            <NotifDialog/>
            {Notify.map((item)=> (
              //<NotificationsList img={item.img} name={item.name} desc={item.desc} />
              <EditNotif desc={item.desc} />
              
            )
          )}
          </Stack>
        </div>
      </header>
    </div>
  );
}

export default App;
