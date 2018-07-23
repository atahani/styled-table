//@flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: inline-block;
  fill: ${props => props.color};
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  user-select: none;
`;

type Props = {
  children: Node,
  color?: string,
  size?: number,
  viewBox?: string
};

const SvgIcon = ({
  children,
  color = "#000000",
  size = 24,
  viewBox = "0 0 24 24",
  ...others
}: Props) => (
  <Svg color={color} size={size} viewBox={viewBox} {...others}>
    {children}
  </Svg>
);

export default SvgIcon;
