import logo from "./logo.svg";
import "./App.css";
import MyButton from "./Testing";
import Game from "./Testing";
import EnhancedComponent from "./HOC";
import HOF from "./HOF";
import BasicHooks from "./BasicHooks";
import UseContext from "./UseContext";
import SampleAxios from "./SampleAxios";
import { Link, NavLink, Outlet } from "react-router-dom";

// import ToggleTagAndContent from './ToggleTagAndContent';

function App() {
  
  return (
    // <ToggleTagAndContent/>
    <div>
  <EnhancedComponent/>
  <HOF/>
  <BasicHooks/>
  <SampleAxios/>
  <NavLink to={"home/children1"} >CHILD1</NavLink>
  <br></br>
  <NavLink to={"home/children2"} >CHILD2</NavLink>
  <NavLink to={"/toggletagandcontent"}>toggleAnd</NavLink>
  <Outlet/>
    </div>
  );
}

export default App;
