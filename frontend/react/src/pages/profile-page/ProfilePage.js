import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import profilePage from "./ProfilePage.module.scss";
import Tabs from "../../components/tabs/Tabs.component";
import { profileUserRequest } from "../../actions/user.action";
import MyProfileTab from "./components/my-profile/MyProfileTab.component";
import ChangePassword from "./components/change-password/ChangePassword.component";
import HeadingProfile from "../../components/heading-profile/HeadingProfile.component";

const ActiveComponent = {
  'My Profile': {
    render: () => <MyProfileTab/>
  },
  'Password': {
    render: () => <ChangePassword/>
  }
}

const ProfilePage = () => {
  const history = useHistory();
  const tabs = useMemo(() => {
    return ["My Profile", "Password"];
  }, []);
  const [activeTab, setActiveTab] = useState("My Profile");
  const dispatch = useDispatch();

  const changeTab = (nameTab) => {
    setActiveTab(nameTab);
  };

  const profile = () => {
    dispatch(profileUserRequest(history));
  };

  useEffect(profile, []);

  return (
    <div className={`${profilePage.profile_page} ${profilePage.wrapper}`}>
      <HeadingProfile textTitle="Profile" textWhatCanYouDo="Here You can set up your profile"/>
      <Tabs tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
      {
        ActiveComponent[activeTab].render()
      }
    </div>
  );
};

export default memo(ProfilePage);
