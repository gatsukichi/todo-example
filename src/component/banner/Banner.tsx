import * as React from "react";
import { color } from "../../constants/color";
import styled, { css } from "styled-components";

const StyledBanner = styled.div`
  ${(props) =>
    css`
      color: ${props.color};
    `}
`;
interface IAppProps {
  color: string;
  text: string;
}

export default function Banner(props: IAppProps) {
  return <StyledBanner color={color[props.color]}>{props.text}</StyledBanner>;
}
