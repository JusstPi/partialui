import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './NotifLists.css';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type Notifs = {
  img: string;
  name: string;
  desc: string;
  onClearClick: () => void;
};

export default function NotificationsList(props: Notifs) {
  return (
    <Box
      sx={{
        background: '#DFDDDD',
        minHeight: 65,
        minWidth: 700,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 30,
      }}
    >
      <Stack direction='row' spacing={2} sx={{ marginLeft: 3 }}>
        <Box sx={{ position: 'flex' }}>
          <Avatar
            alt='picture'
            src={props.img ? 'dis.jpg' : 'check.png'}
            sx={{ width: 30, height: 30, marginTop: 2 }}
          />
        </Box>
        <Box>
          <Stack direction='column'>
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Manrope',
                color: 'black',
                textAlign: 'Left',
                marginLeft: 0,
              }}
            >
              {props.name}
              <div>
                <ClearIcon
                  onClick={props.onClearClick}
                  color='action'
                  sx={{
                    position: 'absolute',
                    marginLeft: 74,
                    marginTop: -1,
                  }}
                />
              </div>
            </Typography>
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Manrope',
                color: '#888888',
                textAlign: 'Left',
                marginLeft: 5,
              }}
            >
              {props.desc}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
