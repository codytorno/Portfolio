import React from "react";
import {
  AMDetailContainer,
  AMColumn1,
  AMColumn2,
  AMDetailTitle,
  AMImageWrap,
  AMDetailDescription,
} from "./AMDetailElements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AMDetail = ({ Icon, Title, Description }) => {
  return (
    <AMDetailContainer>
      <AMColumn1>
        <AMImageWrap>
          <FontAwesomeIcon icon={Icon} size="5x" />
        </AMImageWrap>
      </AMColumn1>
      <AMColumn2>
        <AMDetailTitle>{Title}</AMDetailTitle>
        <AMDetailDescription>{Description}</AMDetailDescription>
      </AMColumn2>
    </AMDetailContainer>
  );
};

export default AMDetail;
