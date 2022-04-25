import React from "react";

import loadingProgressStyles from './LoadingProgress.module.scss'

const LoadingProgressComponent = () => {
  return (
    <div className={loadingProgressStyles.load} />
  );
};

export default LoadingProgressComponent;
