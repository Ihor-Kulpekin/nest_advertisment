import React from "react";

import tabStyles from './Tab.module.scss';

const Tab = ({text, activeTab, changeTab}) => {
  return (
    <div onClick={() => changeTab(text)} className={`${tabStyles.tab} ${activeTab === text ? tabStyles.active : ''}`}>
      {text}
      {
        activeTab === text ? (
          <div className={tabStyles.active_tab}/>
        ) : null
      }
    </div>
  );
};

export default Tab;
