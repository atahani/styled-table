//@flow

import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import TablePagination from "../TablePagination";
import { screenSmallerThan } from "../../style/util";

type Props = {
  columns: {
    [key: string]: {
      key: string,
      label?: string,
      align?: "center" | "left" | "right",
      width?: number,
      content?: Function,
      css?: string,
      cssHeader?: string,
      hideOnDesktop?: boolean,
      hideOnTablet?: boolean,
      hideOnPhone?: boolean
    }
  },
  data?: Array<Object>,
  rowConfig?: {
    uniqueKey?: string,
    css?: string,
    onClick?: Function
  },
  currentPage: number,
  totalPages: number,
  basePageLink: string
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const T = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;

  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const Th = styled.th`
  text-align: ${props => (props.align ? props.align : "left")};
  font-size: 18px;
  color: #686f7a;
  font-weight: 700;
  opacity: 0.65;
  ${screenSmallerThan.desktop`
      display: ${props => props.hideOnDesktop && "none"};
  `};
  ${screenSmallerThan.tablet`
      display: ${props => props.hideOnTablet && "none"};
  `};
  ${screenSmallerThan.phone`
      display: ${props => props.hideOnPhone && "none"};
  `};
  ${props => props.css && css(...props.css)};
`;

const Td = styled.td`
  text-align: ${props => (props.align ? props.align : "left")};
  ${screenSmallerThan.desktop`
      display: ${props => props.hideOnDesktop && "none"};
  `};
  ${screenSmallerThan.tablet`
      display: ${props => props.hideOnTablet && "none"};
  `};
  ${screenSmallerThan.phone`
      display: ${props => props.hideOnPhone && "none"};
  `};
  ${props => props.css && css(...props.css)};
`;

const Tr = styled.tr`
  border-bottom: 2px solid ${rgba(150, 150, 150, 0.5)};
  ${props => props.css && css(...props.css)};
`;

const Table = ({
  columns,
  data = [],
  rowConfig: { uniqueKey = "id", css , onClick } = {},
  currentPage,
  totalPages,
  basePageLink
}: Props) => {
  const headerColumns = () =>
    Object.keys(columns).map(key => (
      <Th
        key={key}
        align={columns[key].align}
        width={columns[key].width}
        hideOnDesktop={columns[key].hideOnDesktop}
        hideOnTablet={columns[key].hideOnTablet}
        hideOnPhone={columns[key].hideOnPhone}
        css={columns[key].cssHeader}
      >
        {columns[key].label ? columns[key].label : ""}
      </Th>
    ));
  const cell = (key, item) => (
    <Td
      key={key}
      align={columns[key].align}
      width={columns[key].width}
      hideOnDesktop={columns[key].hideOnDesktop}
      hideOnTablet={columns[key].hideOnTablet}
      hideOnPhone={columns[key].hideOnPhone}
      css={columns[key].css}
    >
      {columns[key].content ? columns[key].content(item) : item[key]}
    </Td>
  );
  const row = (item: Object) => (
    <Tr
      key={item[uniqueKey]}
      css={css}
      onClick={onClick ? (e: Event) => onClick(e, item) : null}
    >
      {Object.keys(columns).map(key => cell(key, item))}
    </Tr>
  );
  return (
    <Main>
      <T>
        <thead>
          <tr>{headerColumns()}</tr>
        </thead>
        <tbody>{data.map(i => row(i))}</tbody>
      </T>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePageLink={basePageLink}
      />
    </Main>
  );
};

export default Table;
