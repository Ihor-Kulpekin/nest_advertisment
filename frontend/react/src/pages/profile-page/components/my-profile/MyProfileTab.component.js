import React from "react";

import myProfileTabStyles from './MyProfileTab.module.scss'
import { useSelector } from "react-redux";

const MyProfileTab = () => {
  const {user} = useSelector((state) => state.user);
  return (
    <div className={myProfileTabStyles.my_profile_tab}>
      <div className={myProfileTabStyles.profiles_data}>
        <div className={myProfileTabStyles.profiles_data_item}>
          <label className={myProfileTabStyles.label}>First Name</label>
          <input className={myProfileTabStyles.input_profile} type="text" value={user.firstName ?? ''} disabled/>
        </div>
        <div className={myProfileTabStyles.profiles_data_item}>
          <label className={myProfileTabStyles.label}>Last Name</label>
          <input className={myProfileTabStyles.input_profile} type="text" value={user.lastName ?? ''} disabled/>
        </div>
        <div className={myProfileTabStyles.profiles_data_item}>
          <label className={myProfileTabStyles.label}>Email</label>
          <input className={myProfileTabStyles.input_profile} type="text" value={user.email ?? ''} disabled/>
        </div>
      </div>
    </div>
  );
};

export default MyProfileTab;
