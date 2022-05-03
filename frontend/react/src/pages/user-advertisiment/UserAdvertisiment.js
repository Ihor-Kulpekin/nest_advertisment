import React, { useEffect, useMemo, useState } from "react";

import userAdvertisimentStyles from './UserAdvertisiment.module.scss';
import FiltersElements from "../main-page/components/filters-elements/FiltersElements";
import ListAdvertisimentWrapperComponent
  from "../main-page/components/list-advertisiment/ListAdvertisimentWrapper.component";
import LoadingProgressComponent from "../../components/loading-progress/LoadingProgress.component";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvertisimentsActionRequest,
  setListType,
  setPage,
  updateAdvertisimentRequest
} from "../../actions/advertisiment.action";

const UserAdvertisiment = () => {
  const dispatch = useDispatch();
  const { loading, advertisiments, page, listType } = useSelector((state) => state.advertisiment)
  const [value, setValue] = useState('');
  const [sort, setSorting] = useState('price:desc');
  const rows = useMemo(() => {
    return 10;
  }, [])

  const fetchAdvertisiment = () => {
    dispatch(getAdvertisimentsActionRequest({
      filters: {name: {'$regex': value, '$options': 'i'}},
      sort,
      limit: rows,
      rows,
      page,
      skip: rows * (page - 1)
    }))
  }

  const applySorting = (value) => {
    setSorting(value)
  }

  const setTypeList = (value) => {
    dispatch(setListType(value));
  }

  const changePage = (selectedPage) => {
    dispatch(setPage(selectedPage))
  }

  const setViews = (id, item) => {
    dispatch(updateAdvertisimentRequest({
      id,
      newValues: {
        views: item.views ? item.views + 1 : 1
      }
    }))
  }

  useEffect(fetchAdvertisiment, [sort, value, page]);

  return (
    <div className={`${userAdvertisimentStyles.advertisiment} ${userAdvertisimentStyles.wrapper}`}>
      <FiltersElements setTypeList={setTypeList} applySorting={applySorting} sort={sort} listType={listType}/>
      {
        !loading && advertisiments && advertisiments.length ?
          <ListAdvertisimentWrapperComponent setViews={setViews} changePage={changePage} rows={rows} advertisiments={advertisiments}/> :
          <LoadingProgressComponent/>
      }
    </div>
  );
};

export default UserAdvertisiment;
