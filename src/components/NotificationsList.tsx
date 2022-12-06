import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './NotifLists.css';
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from '@mui/material';
import NotifDialog from './Dialog';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export type Notifs = {
    img: string;
    name: string;
    desc: string;
}

export default function NotificationsList(props:Notifs){
    
  
    return(
        <Box sx={{
            background: '#DFDDDD',
            minHeight: 65,
            minWidth: 700,
            borderRadius: 2,
            display:"flex",
            alignItems:"center",
            marginLeft: 30,
            
        }}>
            <Button variant='contained' sx={{marginRight: 80, marginTop: 10, marginBottom: 0}}> NOTIFICATIONS 
            </Button>
            <Stack  direction="row" spacing={2} sx={{marginLeft: 3}}>
                <Box sx={{
                    position: 'flex'
                }}>
                    <Avatar alt='picture' src={props.img} sx={{ width: 30, height: 30, marginTop: 2 }}/>
                </Box>
                <Box>
                    <Stack direction='column'>
                        <Typography variant='h6' sx={{
                        fontFamily: 'Manrope',
                        color: 'black',
                        textAlign: 'Left',
                        marginLeft: 0,
                        }}>  
                        {props.name}
                        <KeyboardArrowRightIcon color='action' sx={{position: 'fixed', marginLeft: 58}} />
                        </Typography>
                        <Typography variant='h6' sx={{
                        fontFamily: 'Manrope',
                        color: '#888888',
                        textAlign: 'Left',
                        marginLeft: 5,
                        }}>  
                        {props.desc}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>

            

        </Box>
    )
}