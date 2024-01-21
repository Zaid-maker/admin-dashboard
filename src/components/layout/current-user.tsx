import { Popover } from "antd";
import React from "react";

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        TEST
      </Popover>
    </>
  );
};

export default CurrentUser;