import React, { useEffect } from "react";

import { GSTN_ICON } from "@shared/urls";
import { ZoidsRoot, Message, Toast } from "@cleartax/zoids";
// icons
import { ArrowForward } from "@cleartax/zoids/build/lib/components/Icons/Icons";

const Facebook = () => {
  useEffect(() => {
    const t = Toast.configure({});
    console.log(t);
  }, []);
  return (
    <ZoidsRoot>
      {GSTN_ICON}
      <ArrowForward />
      <Message dismissText="close">Facebook</Message>
    </ZoidsRoot>
  );
};

export default Facebook;
