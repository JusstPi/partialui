import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NotifDialog from './Dialog';
import { useNavigate, useParams } from 'react-router-dom';
import NotificationsList from './NotificationsList';
import ParentHeaderNavBar from './ParentHeadNavbar';

const ReadNotif = () => {
  //const { notifyId } = useParams();
  const [data, setData] = useState([] as any[]);

  const fetchNotif = async () => {
    const { data } = await axios.get('http://localhost:8080/notification/getAllNotif', {});
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchNotif();
  }, []);

  const dltNotif = async (notifyId: number) => {
    await axios.delete(`http://localhost:8080/notification/deleteNotif/${notifyId}`);
  
    setData(data.filter((item) => item.notifyId !== notifyId));
  };
  

  return (
    <div>
      <ParentHeaderNavBar />
      <Stack
        direction='column'
        spacing={1.5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          paddingBottom: 30,
        }}
      >
        <Box
          style={{
            display: 'flex',
            marginRight: 500,
            justifyContent: 'center',
            width: 200,
            height: 38,
            background: '#05b3e2',
            borderRadius: 7,
            marginTop: 80,
          }}
        >
          <Typography
            sx={{
              marginTop: 1,
              fontFamily: 'Inter',
              color: 'white',
              textTransform: 'none',
            }}
            variant='button'
            gutterBottom>
            NOTIFICATIONS
          </Typography>
        </Box>

        <div className='dialog'>
          <NotifDialog />
        </div>
        {data.map((data) => (
          <NotificationsList
            img={data.img}
            name={data.template}
            desc={data.descript}
            
            onClearClick={async () => {
              await dltNotif(data.notifyId);
            }}
          />
        ))}
      </Stack>
    </div>
  );
};

export default ReadNotif;
