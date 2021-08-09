import { React } from "react";
import {
  AMContainer,
  AMWrapper,
  AMTitle,
  AMDetailsRow,
  AMDescription,
  AMImage,
  AMImageWrapper,
  AMDescriptionWrapper,
} from "./AboutMeElements";

import AMDetail from "./AboutMeDetails/AMDetail";

const AboutMeSection = ({ data }) => {
  return (
    <AMContainer lightBg={true} id={data.id}>
      <AMTitle>{data.title}</AMTitle>
      <AMImageWrapper>
        <AMImage src={data.img} />
      </AMImageWrapper>
      <AMWrapper>
        <AMDetailsRow>
          {data.details.map((detail) => {
            return (
              <AMDetail
                Title={detail.Title}
                Description={detail.Description}
                Icon={detail.Icon}
              />
            );
          })}
        </AMDetailsRow>
        <AMDescriptionWrapper>
          {data.paragraphs.map((p) => {
            return <AMDescription>{p}</AMDescription>;
          })}
        </AMDescriptionWrapper>
      </AMWrapper>
    </AMContainer>
  );
};

export default AboutMeSection;
