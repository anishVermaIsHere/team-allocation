import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from '../Item';

const TeamCard = ({team,members}) => {    
  return (
    <>
    <Typography variant="h5" component="h5" sx={{margin:'0.8rem 0.5rem'}}>
            {team}
    </Typography>
    <Grid container spacing={2}  mt={2} mb={2} sx={{flexGrow:1, background:'#fff', borderRadius:'0.5rem', border:'1px solid #dadada'}}>
        {members.length?members.map(({first_name,last_name,gender,avatar,email,id})=><Grid key={id} item xs={12} md={6}>
            <Item 
            sx={{
                border:'1px solid #717070',
                borderRadius:'0.375rem',marginBottom:'0.6rem',
                marginInline:'0.8rem',
                padding:'0.5rem'
            }}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src={avatar} alt={first_name} style={{marginRight:'0.5rem'}} />
                    <Typography variant='p' component="p" sx={{fontWeight:'600',fontSize:'1rem'}}>
                        {first_name} {last_name} 
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
                        {gender}
                    </span>
                    <span style={{
                        padding:'0.33rem 0.8rem', 
                        minWidth:'100px', 
                        background:'#C1FCE5',
                        borderRadius:'1rem',
                        border:'1px solid #B0E9D3'
                    }}>
                        {email}
                    </span>
                </Typography>
            </Item>
        </Grid>)
        :
        <Typography variant="p"  component="p" padding={5} sx={{color:'red'}} gutterBottom>
            No members 
        </Typography>
        }
    </Grid>
    </>
  )
}

export default TeamCard