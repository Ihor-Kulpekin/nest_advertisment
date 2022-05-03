import React, { useEffect } from "react";

import detailsPageStyles from './DetailsPage.module.scss';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAdvertisimentActionRequest } from "../../actions/advertisiment.action";
import LoadingProgressComponent from "../../components/loading-progress/LoadingProgress.component";
import moment from "moment";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import PhotoGallery from "../../components/photo-gallery/PhotoGallery.component";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {advertisiment, loading} = useSelector((state) => state.advertisiment)

  const getAdvertisiment = () => {
    if (!advertisiment) {
      dispatch(getAdvertisimentActionRequest(id))
    }
  }

  useEffect(getAdvertisiment, [id])

  return (
    <div className={`${detailsPageStyles.wrapper} ${detailsPageStyles.details_page}`}>
      {
        !loading && advertisiment ? (
            <div className={detailsPageStyles.container}>
              <div className={detailsPageStyles.name_price_block}>
                <div className={detailsPageStyles.name_advertisiment}>{advertisiment.name}</div>
                <div className={detailsPageStyles.price_block}>{advertisiment.price}$</div>
              </div>
              <div className={detailsPageStyles.info_block}>
                <div className={detailsPageStyles.info_item}>№{advertisiment._id},</div>
                <div className={detailsPageStyles.info_item}>created {moment(advertisiment.createdAt).format('DD.MM.YYYY HH:MM')},</div>
                <div className={detailsPageStyles.info_item}>views {advertisiment.views ? advertisiment.views : 0}</div>
              </div>
              <PhotoGallery items={[advertisiment.photosAdvertisiment.mainPhoto, ...advertisiment.photosAdvertisiment.photos]}/>
              <div className={detailsPageStyles.description}>
                <div className={detailsPageStyles.description_text}>Description</div>
                <div>{advertisiment.description}</div>
              </div>
            </div>
        ) : <LoadingProgressComponent/>
      }
    </div>
  );
};

export default DetailsPage;
