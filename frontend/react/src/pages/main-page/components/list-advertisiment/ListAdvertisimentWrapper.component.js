import React, { useState } from "react";
import ListAdvertisiment from "./list/ListAdvertisiment";
import GalleryComponent from "./gallery/Gallery.component";
import { useSelector } from "react-redux";
import PaginationComponent from "../../../../components/pagination/Pagination.component";

const ListAdvertisimentWrapperComponent = ({advertisiments, rows, changePage, setViews}) => {
  const {listType, totalCount, page} = useSelector((state) => state.advertisiment);

  return (
    <>
      {listType === 'list' ?
        <ListAdvertisiment setViews={setViews} advertisiments={advertisiments} /> :
        <GalleryComponent setViews={setViews} advertisiments={advertisiments}/>}
      <PaginationComponent totalCount={totalCount} rows={rows} changePage={changePage} page={page}/>
    </>
  );
};

export default ListAdvertisimentWrapperComponent;
