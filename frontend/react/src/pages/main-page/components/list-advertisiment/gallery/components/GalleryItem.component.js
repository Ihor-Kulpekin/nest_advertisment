import React from "react";

import galleryItemStyles from './GalleryItem.module.scss'
import moment from "moment";
import { NavLink } from "react-router-dom";

const GalleryItemComponent = ({item, setViews}) => {
  return (
    <NavLink onClick={() => setViews(item._id, item)} to={`/details/${item._id}`} className={galleryItemStyles.item}>
      <div className={galleryItemStyles.main_photo_block}>
        <img alt={item.name} className={galleryItemStyles.img} src={item.photosAdvertisiment.mainPhoto}/>
      </div>
      <div className={galleryItemStyles.info_block}>
        <div className={galleryItemStyles.text}>{item.name}</div>
        <div className={galleryItemStyles.price}>{item.price}$</div>
        <div className={galleryItemStyles.description_block}>
          <div className={galleryItemStyles.text}>
            {item.description}
          </div>
          <div className={galleryItemStyles.date_text}>
            {moment(item.createdAt).format('DD.MM.YYYY HH:MM')}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default GalleryItemComponent;
