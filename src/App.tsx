import React from 'react';
import './App.css';
// import * from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { blue } from '@mui/material/colors';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const App: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string,
    carbo: string,
    hydradde: string,
    Num: string,
    kali: string,
    details: string,
  ) {
    return { name, calories, fat, carbs, protein, carbo, hydradde, Num, kali, details};
  }

  const rows = [
    createData("1", "#122345678123","14/02/2024",'7hrs 20Min','Gurgan-mumbai','Truck-20ft-closed_body','4000kg','4','mohit', "Veiw Details"),
    createData("1", "#122345678123","14/02/2024",'7hrs 20Min','Gurgan-mumbai','Truck-20ft-closed_body','4000kg','4','mohit', "Veiw Details"),
    createData("1", "#122345678123","14/02/2024",'7hrs 20Min','Gurgan-mumbai','Truck-20ft-closed_body','4000kg','4','mohit', "Veiw Details"),
    createData("1", "#122345678123","14/02/2024",'7hrs 20Min','Gurgan-mumbai','Truck-20ft-closed_body','4000kg','4','mohit', "Veiw Details"),
    createData("1", "#122345678123","14/02/2024",'7hrs 20Min','Gurgan-mumbai','Truck-20ft-closed_body','4000kg','4','mohit', "Veiw Details"),
    createData("1", "#122345678123","14/02/2024",'7hrs 20Min','Gurgan-mumbai','Truck-20ft-closed_body','4000kg','4','mohit', "Veiw Details"), 
  ];
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo and Name */}
        <div className="logo">
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          
        </div>
        
        
        {/* Sections */}
        <div className="sections">
          <ul>
            <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>BID</Typography>
                </div>
              </li>
              <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>POD</Typography>
                </div>
              </li>
              <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>Vendor</Typography>
                </div>
              </li>
          </ul>
        </div>
        
        {/* Details */}
        <div className="details">
          <ul>
          <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>Settings</Typography>
                </div>
              </li>
              <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>Profile</Typography>
                </div>
              </li>
              <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>Contact Us</Typography>
                </div>
              </li>
              <li>
              <div className='x'>
                <AutoAwesomeMosaicIcon/>
                <Typography>Logout</Typography>
                </div>
              </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-items">
            <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Bid</Typography>
        <Typography sx={{ minWidth: 100 }}>Pod</Typography>
        <Typography sx={{ minWidth: 100 }}>Vendor</Typography>
        <Typography sx={{ minWidth: 100 }}>User</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 30,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
          </div>
        </header>

        {/* Sections */}
        <div className="sections-container">
          <div className='sections-header'>
            <div className="sections-header-first">
            <div className="section">Live</div>
            <div className="section">Results</div>
            <div className="section">History</div>
            <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </div>
            <div className='sections-header-last'>
              <Typography>Create</Typography>
              <AddBoxIcon/>

            </div>
          </div>
        </div>
        <div className='box'>
        <div className='Box'>
          <div className='innerbox'>
          <div className="boxsection1">Live(30)</div>
            <div className="boxsection2">Responded(30)</div>
            <div className="boxsection3">Unresponded(30)</div>
          </div>
          <div className='innerbox'>
          <div className="boxsection1">Bid Created</div>
            <div className="boxsection4">Today</div>
            <div className="boxsection4">Yesterday</div>
            <div className="boxsection5">
            <Typography>Calender</Typography>
            <ArrowDropDownIcon/ >
             {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker />
              </DemoContainer>
            </LocalizationProvider> */}
            </div>
           
            <FilterAltIcon sx={{color:"navy"}}/>
          </div>
           
        </div>
        <div className='Box'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{backgroundColor: blue}}>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell align="center">BID Number Created By</StyledTableCell>
            <StyledTableCell align="center">Start date & time</StyledTableCell>
            <StyledTableCell align="center">Bid Time Remaining</StyledTableCell>
            <StyledTableCell align="center">From city to city</StyledTableCell>
            <StyledTableCell align="center">Vechicle Type, Size, Body, No.Of Vechicles</StyledTableCell>
            <StyledTableCell align="center">Material Weight (in KG)</StyledTableCell>
            <StyledTableCell align="center">Response</StyledTableCell>
            <StyledTableCell align="center">Assigned Staff</StyledTableCell>
            <StyledTableCell align="center">Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.carbo}</StyledTableCell>
              <StyledTableCell align="center">{row.hydradde}</StyledTableCell>
              <StyledTableCell align="center">{row.Num}</StyledTableCell>
              <StyledTableCell align="center">{row.kali}</StyledTableCell>
              <StyledTableCell align="center">{row.details}</StyledTableCell>
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
      </div>
    </div>
  );
}

export default App;
