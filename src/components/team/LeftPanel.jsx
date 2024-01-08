import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {NavLink} from 'react-router-dom'


const LeftPanel = ({
  teamList,
  selectedTeamToAdd,
  handleTeamSelection
}) => {
  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-team-add-emp">
          Add to Team
        </InputLabel>
        <Select
          labelId="select-team-add-emp"
          id="demo-simple-select"
          value={selectedTeamToAdd}
          onChange={handleTeamSelection}
        >
          {teamList.map(({team,id})=><MenuItem key={id} value={team}>{team}</MenuItem>)}
        </Select>
      </FormControl>

      <ul>
        <li style={{padding:'1rem'}}>
        <NavLink to='/'>Home</NavLink>
        </li>
        <li style={{padding:'1rem'}}>
        <NavLink to='/teams'>Go to Teams</NavLink>
        </li>
      </ul>
    </Box>
    </>
  )
}

export default LeftPanel