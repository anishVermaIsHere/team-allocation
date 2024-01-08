import {useContext} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from '../Item';
import EmployeeCard from './EmployeeCard';
import LeftPanel from './LeftPanel';
import EmpContext from '../../context/EmpContext';
import Loading from '../../shared/widgets/Loading';

const EmployeeList=()=>{
  const {
    employees, 
    selectedTeamToAdd, 
    handleTeamSelection,
    addToTeam,
    teamList
  }=useContext(EmpContext);

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container>
        {employees.length?<><Grid item xs={12} padding={2} md={3} sx={{background:'#1515160d'}}>
          <Item>
            <LeftPanel 
              teamList={teamList} 
              selectedTeamToAdd={selectedTeamToAdd}
              handleTeamSelection={handleTeamSelection} 
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={9} padding={2} sx={{background:'#1515160d',paddingLeft:'1rem'}}>
          <Typography variant="h6" component="h6" gutterBottom>
            List of Employees of {selectedTeamToAdd} Team
          </Typography>
          <Typography variant="p" component="p" padding={1} gutterBottom>
            To add employees to team, select a team from left panel and click on Employee card 
          </Typography>

            <Grid container spacing={2}>
             {employees.map(emp=><EmployeeCard 
                key={emp.id} 
                emp={emp} 
                addToTeam={addToTeam}
                selectedTeamToAdd={selectedTeamToAdd}
            />)}
            </Grid>

        </Grid>
        </>
        :
        <Loading />}
      </Grid>
    </Box>
  );
}

export default EmployeeList;