import React from "react";
import headingProfileStyles from "./HeadingProfile.module.scss";

const HeadingProfile = ({textTitle, textWhatCanYouDo}) => {
  return (
    <div className={headingProfileStyles.heading_block}>
      <div className={headingProfileStyles.title}>{textTitle}</div>
      <div className={headingProfileStyles.what_you_can_do_text}>{textWhatCanYouDo}</div>
    </div>
  );
};

export default HeadingProfile;
