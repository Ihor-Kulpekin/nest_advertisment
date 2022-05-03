import React from "react";

import tabsStyles from './Tabs.module.scss'
import Tab from "./tab/Tab.component";

const Tabs = ({activeTab, tabs, changeTab}) => {
  return (
    <div className={tabsStyles.tabs}>
      {
        tabs && tabs.length ? (
          tabs.map((tab) => <Tab key={tab} text={tab} activeTab={activeTab} changeTab={changeTab}/>)
        ) : null
      }
    </div>
  );
};

export default Tabs;
