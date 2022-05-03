import React  from "react";

import userAdvertisimentStyles from './UserAdvertisiment.module.scss';
import FiltersElements from "../main-page/components/filters-elements/FiltersElements";
import ListAdvertisimentWrapperComponent
  from "../main-page/components/list-advertisiment/ListAdvertisimentWrapper.component";
import LoadingProgressComponent from "../../components/loading-progress/LoadingProgress.component";

import withAdvertisiments from "../../hoc/withAdvertisiments";

const UserAdvertisimentPage = ({loading, advertisiments, setTypeList, applySorting, sort, listType, setViews, changePage, rows}) => {
  return (
    <div className={`${userAdvertisimentStyles.advertisiment} ${userAdvertisimentStyles.wrapper}`}>
      <FiltersElements setTypeList={setTypeList} applySorting={applySorting} sort={sort} listType={listType}/>
      {loading ? <LoadingProgressComponent/> : null}
      {
        !loading && advertisiments && advertisiments.length ?
          <ListAdvertisimentWrapperComponent setViews={setViews} changePage={changePage} rows={rows} advertisiments={advertisiments}/> : null
      }
    </div>
  );
};

export default withAdvertisiments(UserAdvertisimentPage, 'myAdvertisiment');
