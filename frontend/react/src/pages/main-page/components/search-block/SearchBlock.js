import React from "react";

import searchBlock from './SearchBlock.module.scss'

const SearchBlock = ({onChange, value}) => {
  return (
    <div className={searchBlock.search_block}>
        <div className={`${searchBlock.wrapper} ${searchBlock.search_elements_block}`}>
          <div className={searchBlock.input_block}>
            <i className="icon-search"/>
            <input value={value ?? ''} placeholder="Search ads" onChange={onChange} className={searchBlock.input} type="text" />
          </div>
        </div>
    </div>
  );
};

export default SearchBlock;
