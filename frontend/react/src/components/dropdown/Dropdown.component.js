import React from "react";

import dropdownStyles from './Dropdown.module.scss'
import { NavLink } from "react-router-dom";

const DropdownComponent = () => {
  return (
    <div className={dropdownStyles.dropdown}>
      <div className={dropdownStyles.dropdown_block}>
        <NavLink to="/profile">
          <div className={dropdownStyles.dropdown_item}>
            <i className="icon-user"/>
            My Profile
          </div>
        </NavLink>
        <NavLink to="/my-advertisiment">
          <div className={dropdownStyles.dropdown_item}>
            <i className="icon-bullhorn"/>
            My Advertisiment
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownComponent;
