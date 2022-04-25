import React from "react";

import filtersElements from './FiltersElements.module.scss'

const FiltersElements = ({sort, applySorting, setTypeList, listType}) => {
  return (
    <div className={`${filtersElements.wrapper} ${filtersElements.filters_elements}`}>
      <div className={filtersElements.items_block}>
        <div className={filtersElements.text}>Sorting By:</div>
        <div className={filtersElements._items}>
          <div onClick={() => applySorting('createdAt:desc')} className={sort === 'createdAt:desc' ? filtersElements._choosen_item : filtersElements._item}>New</div>
          <div onClick={() => applySorting('createdAt:asc')} className={sort === 'createdAt:asc' ? filtersElements._choosen_item : filtersElements._item}>Old</div>
          <div onClick={() => applySorting('price:desc')} className={sort === 'price:desc' ? filtersElements._choosen_item : filtersElements._item}>Expensive</div>
          <div onClick={() => applySorting('price:asc')} className={sort === 'price:asc' ? filtersElements._choosen_item : filtersElements._item}>Cheap</div>
        </div>
      </div>
      <div className={filtersElements.items_block}>
        <div className={filtersElements.text}>List Type:</div>
        <div className={filtersElements._items_type_list}>
          <div  onClick={() => setTypeList('list')} className={listType === 'list' ? filtersElements._choosen_item : filtersElements._item}>List</div>
          <div onClick={() => setTypeList('gallery')} className={listType === 'gallery' ? filtersElements._choosen_item : filtersElements._item}>Gallery</div>
        </div>
      </div>
    </div>
  );
};

export default FiltersElements;
