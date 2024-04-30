import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Sidebar = () => {
    // const [isContentVisible, setContentVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleLinkClick = (buttonId) => {
    setActiveButton(buttonId);
    setContentVisible(true);
  }
  return (
    <div><aside>
    <NavLink to='/newagent' ><li><button className={activeButton === 1 ? 'red' : 'basic-button'}>New Agent</button></li></NavLink>
    <NavLink to="/agentlist" ><li><button className={activeButton === 2 ? 'red' : 'basic-button'}>Agent List</button></li></NavLink>
    
  </aside></div>
  )
}

export default Sidebar