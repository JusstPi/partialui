import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EditNotif from './Edit';
import NotifDialog from './EditDialog';

const UpdateNotif = (props: any) => {

  const descript = props.desc;

  const [data,setData] = useState([] as any[])

  const notifyId = props.notifyId;
  const fetchNotif = async () => {
    const { data } = await axios.get('http://localhost:8080/notification/getAllNotif', {
    })
      setData(data)
      console.log(data)
    }

  useEffect(() => {
    fetchNotif();
  }, []);

  const dltNotif = async (notifyId: number) => {
    await axios.delete(`http://localhost:8080/notification/deleteNotif/${notifyId}`);
  
    setData(data.filter((item) => item.notifyId !== notifyId));
  };


    return (
      <div>        
          <Stack direction='column' spacing={1.5} 
          sx={{display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',  
          marginLeft: 10, 
          paddingBottom: 30}}>

           <Box style={{display: 'flex',marginRight: 500, justifyContent: 'center',width: 300, 
            height: 38, background: '#05b3e2', borderRadius: 7, 
            marginTop: 100}}>

              <Typography sx={{marginTop: 1,fontFamily: 'Inter',color: 'white',textTransform:'none'}} 
              variant='button' gutterBottom>
               EDIT NOTIFICATION STATEMENTS
              </Typography>
            </Box>

            <div className='dialog'>
            <NotifDialog />
            </div>
            { data.map((data)=>
            <EditNotif desc={data.descript}
            onClear={async () => {
              await dltNotif(data.notifyId);
            }}
            />
            )}
            </Stack>
            </div>
    );
}
export default UpdateNotif;
