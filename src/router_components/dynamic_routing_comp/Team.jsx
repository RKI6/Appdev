import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {teamComponents} from './Teams'
import { Button, Typography } from '@mui/material';

function Team() {
    const { teamId } = useParams();
    const TeamComponent = teamComponents[teamId] || <div>Team Error !....</div>
    useEffect(() => {
        console.log(teamId)
    }, [teamId])
    
  return (
    <Typography variant='overline'>

    <div>{TeamComponent}</div>
    </Typography>
  )
}

export default Team