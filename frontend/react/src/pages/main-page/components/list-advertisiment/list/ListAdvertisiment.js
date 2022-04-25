import React from "react";

import listStyles from './ListAdvertisiment.module.scss';
import ListAdvertisimentItem from "./components/ListAdvertisimentItem";

const ListAdvertisiment = ({advertisiments, setViews}) => {
  return (
    <div className={`${listStyles.list} ${listStyles.wrapper}`}>
      {advertisiments && advertisiments.length ? (
        advertisiments.map((item) => <ListAdvertisimentItem key={item._id} item = {item} setViews={setViews}/>)
      ) : 'Empty List'}
    </div>
  );
};

export default ListAdvertisiment;
