import React from "react";

import alertStyles from './Alert.module.scss'
import { useErrors } from "../../hooks/useErrors";

const AlertComponent = ({keyReducer, show, text}) => {
  const {error} = useErrors(keyReducer);

  return (
    <div className={`${alertStyles.alert} ${show ? alertStyles.visible : ''} ${error ? alertStyles.failed : alertStyles.successfuly}`}>
      <div className={alertStyles.content}>
        {error ? error : text}
      </div>
    </div>
  );
};

export default AlertComponent;
