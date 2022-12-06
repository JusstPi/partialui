import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './NotifLists.css';
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from '@mui/material';

export type EditNotifs = {
    desc: string;
}

export default function EditNotif(props:EditNotifs){
    
  
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
            
            <Stack  direction="row" spacing={2} sx={{marginLeft: 3}}>
                <Box sx={{
                    position: 'flex'
                }}>
                </Box>
                <Box>
                    <Stack direction='column'>
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