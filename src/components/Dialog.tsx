import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const NotifDialog = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate('/editNotif');
  };

  return (
    <MoreHorizIcon onClick={handleClick} sx={{ marginLeft: 80, marginTop: -3 , color: 'black' }} />
  );
};

export default NotifDialog;
