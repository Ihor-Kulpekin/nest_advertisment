import React from "react";

import listItem from './ListAdvertisimentItem.module.scss';
import moment from "moment";
import { NavLink } from "react-router-dom";

const ListAdvertisimentItem = ({item, setViews}) => {
  return (
    <NavLink onClick={() => setViews(item._id, item)} to={`/details/${item._id}`} className={listItem.item}>
      <div className={listItem.main_photo_block}>
        <img alt={item.name} className={listItem.img} src={item.photosAdvertisiment.mainPhoto}/>
      </div>
      <div className={listItem.info_block}>
        <div className={listItem.text}>{item.name}</div>
        <div>{item.price}$</div>
        <div className={listItem.description_block}>
          <div className={listItem.text}>
            {item.description}
          </div>
          <div className={listItem.date_text}>
            {moment(item.createdAt).format('DD.MM.YYYY HH:MM')}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ListAdvertisimentItem;
