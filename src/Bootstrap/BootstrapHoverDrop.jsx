import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const HoverDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dropdown
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      show={isHovered}
    >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Hover Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HoverDropdown;
