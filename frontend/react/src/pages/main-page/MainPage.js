import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBlock from "./components/search-block/SearchBlock";
import FiltersElements from "./components/filters-elements/FiltersElements";
import {
  getAdvertisimentsActionRequest,
  setListType,
  setPage, updateAdvertisimentRequest
} from "../../actions/advertisiment.action";
import LoadingProgressComponent from "../../components/loading-progress/LoadingProgress.component";
import ListAdvertisimentWrapperComponent from "./components/list-advertisiment/ListAdvertisimentWrapper.component";
import withAdvertisiments from "../../hoc/withAdvertisiments";

// const MainPageWithAdvertisiments

const MainPage = () => {
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

  const onChange = (event) => {
    setValue(event.target.value)
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
    <>
      <SearchBlock onChange={onChange}/>
      <FiltersElements setTypeList={setTypeList} applySorting={applySorting} sort={sort} listType={listType}/>
      {
        !loading && advertisiments && advertisiments.length ?
          <ListAdvertisimentWrapperComponent setViews={setViews} changePage={changePage} rows={rows} advertisiments={advertisiments}/> :
          <LoadingProgressComponent/>
      }
    </>
  );
};

export default MainPage;
