import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import TeamInd from "./TeamInd";
import TeamSA from "./TeamSA";
import TeamENG from "./TeamENG";
import { Button } from "@mui/material";

const teamComponents = {
  Ind : <TeamInd /> ,
  ENG : <TeamENG /> ,
  SA : <TeamSA />  
}
function Teams() {
  const teams = ["Ind", "ENG", "SA"];

  return (
    <div style={{display : 'flex' , alignItems : 'center' , justifyContent : 'center' , height : '100vh' , marginRight : '200px'}}>

    <nav style={{display : 'flex'}}>
      <div>

      {teams.map((teamid) => (
        <NavLink key={teamid} to={`/teams/${teamid}`} style={{textDecoration : 'none' , display : 'flex' , flexDirection : 'column' , justifyContent : 'space-between' , height : '10vh'}}>
          <Button variant="contained">{teamid}</Button>
        </NavLink>
      ))}
      
      </div>
      <Outlet/>
    </nav>
      </div>
  );
}
export  { teamComponents }

export default Teams;
