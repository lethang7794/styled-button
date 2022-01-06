import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    padding: `6px 14px`,
    fontSize: 16 / 16 + "rem",
    lineHeight: "19px",
    borderRadius: "2px"
  },
  medium: {
    padding: `14px 22px`,
    fontSize: 18 / 16 + "rem",
    lineHeight: "21px",
    borderRadius: "2px"
  },
  large: {
    padding: `18px 34px`,
    fontSize: 21 / 16 + "rem",
    lineHeight: "25px",
    borderRadius: "4px"
  }
};

const Button = ({ variant, size, children }) => {
  switch (variant) {
    case "fill":
      return <FillButton style={SIZES[size]}>{children}</FillButton>;
    case "outline":
      return <OutlineButton style={SIZES[size]}>{children}</OutlineButton>;
    case "ghost":
      return <GhostButton style={SIZES[size]}>{children}</GhostButton>;
    default:
      throw new Error(`Unimplement variant: ${variant}`);
  }
};

const ButtonBase = styled.button`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  border: 2px solid transparent;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
`;

const FillButton = styled(ButtonBase)`
  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 3px;
  }

  &:hover {
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border-color: currentColor;

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 3px;
  }

  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  background: transparent;
  color: ${COLORS.gray};
  border-color: transparent;

  &:focus {
    outline: 2px solid ${COLORS.gray};
    outline-offset: 3px;
  }

  &:hover {
    background: ${COLORS.transparentGray15};
  }
`;

export default Button;
