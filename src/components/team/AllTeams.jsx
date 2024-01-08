import {useContext,useState} from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from '../Item';
import LeftPanel from './LeftPanel';
import EmpContext from '../../context/EmpContext';
import TeamCard from './TeamCard';

const AllTeams=()=>{
  const {
    employees, 
    selectedTeam, 
    selectedTeamToAdd, 
    handleTeamFilter,
    handleTeamSelection,
    teamList
  }=useContext(EmpContext);
  const [groupTeam, setGroupTeam]=useState([]);
    const groupedTeamMembers=()=>{
        let teams=[];
        teamList.map(({team})=>{
            const members=employees.filter((emp)=>emp.domain===team?emp:"");
            return teams.push({team:team,members});
        });
        return teams;
    }

    useEffect(() => {
      setGroupTeam(groupedTeamMembers());
    
      return () => {
        setGroupTeam([]);
      }
    }, [])
    
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container>
        <Grid item xs={12} padding={2} md={3} sx={{background:'#1515160d'}}>
          <Item>
            <LeftPanel 
              teamList={teamList} 
              selectedTeam={selectedTeam} 
              selectedTeamToAdd={selectedTeamToAdd}
              handleTeamFilter={handleTeamFilter}
              handleTeamSelection={handleTeamSelection} 
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={9} padding={2} sx={{background:'#1515160d',paddingLeft:'1rem'}}>
          <Typography variant="h6" component="h6" gutterBottom>
            List of Teams and Members - Total team {groupTeam.length}
          </Typography>

            {groupTeam.length?<Box>
             {groupTeam.map(({team,members},index)=>{
                return <TeamCard key={index} team={team} members={members}/>
              }
            )}
            </Box>
            :
            <Grid container spacing={2}>
                <Typography variant="h6" component="h6" gutterBottom>
                    No members and Teams
                </Typography>
            </Grid>
            }

        </Grid>
      </Grid>
    </Box>
  );
}

export default AllTeams;