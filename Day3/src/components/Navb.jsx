import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material';
import { CatchingPokemonRounded } from '@mui/icons-material';
const Navb=()=>{
    return(<>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit'>
                    <CatchingPokemonRounded/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                    Neej
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' >Features</Button>
                    <Button variant='contained'>Pricing</Button>
                    <Button variant='contained'>About</Button>
                    <Button variant='contained'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    </>)
}
export default Navb;