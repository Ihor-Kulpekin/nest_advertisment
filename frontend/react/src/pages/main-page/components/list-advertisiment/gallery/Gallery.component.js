import React from "react";

import galleryStyles from './Gallery.module.scss'
import GalleryItem from "./components/GalleryItem.component";

const GalleryComponent = ({advertisiments, setViews}) => {
  return (
    <div className={`${galleryStyles.gallery} ${galleryStyles.wrapper}`}>
      {advertisiments && advertisiments.length ? (
        advertisiments.map((item) => <GalleryItem key={item._id} item = {item} setViews={setViews}/>)
      ) : 'Empty List'}
    </div>
  );
};

export default GalleryComponent;
