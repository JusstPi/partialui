import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function PuiFooter(){
    return (
            <Box sx={{background: 'black', minHeight: 50}}>
                <Box sx={{position: 'absolute',display: 'flex', marginLeft: 10}}>
                <Typography variant='h6' sx={{
                    fontFamily: 'Manrope',
                    color: 'white',
                    fontSize: 16
                    }}>
                    <div style={{marginTop: 28}}>
                    © 2022 TeamBangan, Inc. All Rights reserved
                    </div>
                </Typography>
                </Box>
                <Box sx={{position: 'relative',marginLeft: 138}}>
                    <Stack direction='row'>
                    <div style={{marginTop: 28}}>
                        <InstagramIcon sx={{color: 'white',marginRight: 5}}/>
                        <TwitterIcon sx={{color: 'white',marginRight: 5}}/>
                        <GitHubIcon sx={{color: 'white',marginRight: 5}}/>
                        <FacebookIcon sx={{color: 'white',marginRight: 5}}/>
                    </div>
                    </Stack>
                </Box>
            </Box>

    )
}