import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvertisimentsActionRequest,
  setListType,
  setPage,
  updateAdvertisimentRequest
} from "../actions/advertisiment.action";

const withAdvertisiments = (Component) => {
  const dispatch = useDispatch();
  const { loading, advertisiments, page, listType } = useSelector((state) => state.advertisiment)
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
    <Component
      loading={loading}
      advertisiments={advertisiments}
      page={page}
      listType={listType}
      applySorting={applySorting}
      setTypeList={setTypeList}
      changePage={changePage}
      setViews={setViews}
    />
  );
};

export default withAdvertisiments;
