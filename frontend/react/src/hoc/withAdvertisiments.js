import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvertisimentsActionRequest,
  setListType,
  setPage,
  updateAdvertisimentRequest
} from "../actions/advertisiment.action";

const withAdvertisiments = (Component, typePage) => () => {
    const dispatch = useDispatch();
    const { loading, advertisiments, page, listType } = useSelector((state) => state.advertisiment)
    const { user } = useSelector((state) => state.user)

    const [value, setValue] = useState('');
    const [sort, setSorting] = useState('price:desc');
    const rows = useMemo(() => {
      return 10;
    }, [])

    const fetchAdvertisiment = () => {
      const filters = typePage === 'mainPage' ? {name: {'$regex': value, '$options': 'i'}} : { userId: user._id };
      dispatch(getAdvertisimentsActionRequest({
        filters,
        sort,
        limit: rows,
        rows,
        page,
        skip: rows * (page - 1)
      }))
    }

    const onChange = (event) => {
      setValue(event.target.value)
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

    return <Component
      loading={loading}
      advertisiments={advertisiments}
      page={page}
      rows={rows}
      listType={listType}
      applySorting={applySorting}
      setTypeList={setTypeList}
      changePage={changePage}
      setViews={setViews}
      onChange={onChange}
      value={value}
    />
};

export default withAdvertisiments;
