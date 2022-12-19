import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export type Edit = {
    desc: string;
    onClear: () => void;
}

const EditNotif = (props: Edit) => {
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
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Manrope',
          color: '#888888',
          textAlign: 'Left',
          marginLeft: 5,
        }}
      >
        {props.desc}
        <div><ClearIcon onClick={props.onClear}
          color="action"
          sx={{ position: 'absolute', marginLeft: 77, marginTop: -4 }}
        />
        </div>
      </Typography>
    </Box>
  );
};

export default EditNotif;
