import * as React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
export interface ButtonProps {}

const StyledButton = styled.button`
  height: 100px;
  width: 100px;
  border: 5px solid #bdbbbb;
  box-sizing: border-box;
  border-radius: 20px;
  &:hover {
    border-color: #e670a3;
    background: ${darken(0.3, "#ffffff")};
  }
  &:active {
    background: ${darken(0.1, "#ffffff")};
  }

  &:visited {
    background-color: ${darken(0.7, "#ffffff")};
  }
`;

export function Button(props: ButtonProps) {
  return <StyledButton>ADD</StyledButton>;
}
