import React from "react";
import { Carousel } from "react-responsive-carousel";

import photoGalleryStyles from './PhotoGallery.module.scss'

const PhotoGallery = ({items}) => {
  return (
    <div className={photoGalleryStyles.photo_gallery}>
      <Carousel verticalSwipe="standard" showArrows={true} showThumbs={false} showStatus={false}>
        {
          items && items.length ? (
            items.map((item) => <img src={item} alt="" />)
          ) : null
        }
      </Carousel>
    </div>
  );
};

export default PhotoGallery;
