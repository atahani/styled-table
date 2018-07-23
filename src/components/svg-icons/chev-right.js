//@flow

import React from "react";
import SvgIcon from "../SvgIcon";

type Props = {};

const ChevronRight = ({ ...others }: Props) => (
  <SvgIcon {...others}>
    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
  </SvgIcon>
);

export default ChevronRight;
