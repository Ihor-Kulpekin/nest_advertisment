import React from "react";

import SearchBlock from "./components/search-block/SearchBlock";
import FiltersElements from "./components/filters-elements/FiltersElements";
import LoadingProgressComponent from "../../components/loading-progress/LoadingProgress.component";
import ListAdvertisimentWrapperComponent from "./components/list-advertisiment/ListAdvertisimentWrapper.component";
import withAdvertisiments from "../../hoc/withAdvertisiments";

const MainPage = ({loading, advertisiments, onChange, setTypeList, applySorting, sort, listType, setViews, changePage, rows, value}) => {
  return (
    <>
      <SearchBlock value={value} onChange={onChange}/>
      <FiltersElements setTypeList={setTypeList} applySorting={applySorting} sort={sort} listType={listType}/>
      {loading ? <LoadingProgressComponent/> : null}
      {
        !loading && advertisiments && advertisiments.length ?
          <ListAdvertisimentWrapperComponent setViews={setViews} changePage={changePage} rows={rows} advertisiments={advertisiments}/> : null
      }
    </>
  );
};

export default withAdvertisiments(MainPage, 'mainPage');
