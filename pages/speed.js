import React, { useEffect } from "react";

import { GSTN_ICON } from "@shared/urls";
import { ZoidsRoot, Message, Toast } from "@cleartax/zoids";
// icons
import { MdArrowForward } from "react-icons/md";

const Facebook = () => {
  useEffect(() => {
    const t = Toast.configure({});
    console.log(t);
  }, []);
  return (
    <ZoidsRoot>
      {GSTN_ICON}
      <MdArrowForward />
      <Message dismissText="close">Facebook</Message>
    </ZoidsRoot>
  );
};

export default Facebook;
