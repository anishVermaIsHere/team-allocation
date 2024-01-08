import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from '../Item';

const EmployeeCard = ({emp,addToTeam,selectedTeamToAdd}) => {
    const{first_name,last_name}=emp;
    const fullName=first_name+' '+last_name;
    
  return (
    <Grid item xs={12} md={6}>
        <Item 
        onClick={()=>addToTeam(emp.id)}
        style={{border:emp.domain===selectedTeamToAdd?'2px solid #717070':'none'}}
        sx={{
            // border:'1px solid #717070',
            borderRadius:'0.375rem',marginBottom:'0.6rem',
            cursor:'pointer'
        }}>
            <div style={{display:'flex',alignItems:'center'}}>
                <img src={emp.avatar} alt={fullName} style={{marginRight:'0.5rem'}} />
                <Typography variant='p' component="p" sx={{fontWeight:'600',fontSize:'1rem'}}>
                    {fullName} 
                </Typography>
            </div>
            <Typography variant='p' component="p" mt={2} align='left'>
                <span style={{
                    marginRight:'1rem', 
                    padding:'0.33rem 0.8rem', 
                    minWidth:'100px', 
                    background:'#1515160d',
                    fontWeight:'600',
                    borderRadius:'1rem',
                    border:'1px solid #dadada'
                }}>
                    {emp.gender}
                </span>
                <span style={{
                    padding:'0.33rem 0.8rem', 
                    minWidth:'100px', 
                    background:'#C1FCE5',
                    borderRadius:'1rem',
                    border:'1px solid #B0E9D3'
                }}>
                    {emp.email}
                </span>
            </Typography>
                    
            <Typography variant='p' component="p" mt={2} align='left'>
                <span style={{
                    marginRight:'1rem', 
                    padding:'0.33rem 0.8rem', 
                    background:'#4792F7',
                    color:'#fff',
                    borderRadius:'0.375rem'
                }}>
                    {emp.domain}
                </span>
            </Typography>
        </Item>
    </Grid>
        
  )
}

export default EmployeeCard