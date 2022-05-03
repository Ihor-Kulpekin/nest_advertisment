import React, { useState } from "react";

import headerStyles from './Header.module.scss'
import CreateAdvertisimentModal from "../modals/CreateAdvertisimentModal";
import { useDispatch } from "react-redux";
import { createAdvertisimentActionRequest } from "../../actions/advertisiment.action";
import { NavLink } from "react-router-dom";
import DropdownComponent from "../dropdown/Dropdown.component";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsShow(!isShow);
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const createAdvertisiment = (values) => {
    dispatch(createAdvertisimentActionRequest(values))
  }

  return (
    <>
      <header className={headerStyles.header_wrapper}>
        <div className={`${headerStyles.wrapper} ${headerStyles.header}`}>
          <NavLink  to="/">
            <div className={headerStyles.logo}>
              Advertisiment
            </div>
          </NavLink>
          <div className={headerStyles.container_profile}>
            <div className={headerStyles.menu_block}>
                <div onClick={handleClick} className={headerStyles.my_profile_text}>
                  <i className="icon-user"/>
                  My Profile
                </div>
              {
                isVisible ? <DropdownComponent/> : null
              }
            </div>
            <div onClick={toggleModal} className={headerStyles.button_block}>
              <div>
                Create Advertisiment
              </div>
            </div>
          </div>
        </div>
      </header>
      <CreateAdvertisimentModal toggleModal={toggleModal} isShow={isShow} createAdvertisiment={createAdvertisiment}/>
    </>
  );
};

export default Header;
