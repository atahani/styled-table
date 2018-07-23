//@flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { screenSmallerThan } from "../../style/util";
import ChevronRight from "../svg-icons/chev-right";
import ChevronLeft from "../svg-icons/chev-left";

const Main = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

const PageLink = styled(Link)`
  height: 30px;
  width: 30px;
  border-radius: 6px;
  text-align: center;
  line-height: 30px;
  font-size: 16.5px;
  margin: 0px 4px;
  text-decoration: none;
  ${props =>
    props.selected
      ? `
    background-color: #009688;
    color: #FFFFFF;
  `
      : `
    background-color: rgba(0, 150, 136, 0.25);
    color: #009688;
  `};
`;

const ThreeBullet = styled.strong`
  font-size: 20px;
  color: #878787;
  font-weight: 700;
`;

const ChevronLink = styled(Link)`
  font-size: 17px;
  margin: 0px 6px;
  color: #009688;
  display: flex;
  text-decoration: none;
  align-items: center;
  ${props =>
    props.disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
    cursor: defualt;
  `};
  ${screenSmallerThan.phone`
    span {
      display: none;
    }
  `};
`;

type Props = {
  currentPage: number,
  totalPages: number,
  basePageLink: string
};

const TablePagination = ({ currentPage, totalPages, basePageLink }: Props) => {
  if (totalPages <= 1) {
    return null;
  }
  const elements = [];
  let putBullet = false;
  if (totalPages > 3) {
    elements.push(
      <ChevronLink
        key="back"
        to={`${basePageLink}?page=${currentPage - 1}`}
        disabled={currentPage === 1}
      >
        <ChevronLeft color="#009688" />
        <span>Back</span>
      </ChevronLink>
    );
  }
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === currentPage ||
      i === totalPages ||
      i === currentPage - 1 ||
      i === currentPage + 1 ||
      i === currentPage + 2 ||
      (i === 1 && currentPage + 4 > totalPages)
    ) {
      elements.push(
        <PageLink
          key={i}
          selected={currentPage === i}
          to={`${basePageLink}?page=${i}`}
        >
          {i}
        </PageLink>
      );
    } else if (!putBullet && totalPages > 3 && elements.length > 1) {
      elements.push(<ThreeBullet key="bullet">...</ThreeBullet>);
      putBullet = true;
    }
  }
  if (totalPages > 3) {
    elements.push(
      <ChevronLink
        key="next"
        to={`${basePageLink}?page=${currentPage + 1}`}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <ChevronRight color="#009688" />
      </ChevronLink>
    );
  }
  return <Main>{elements}</Main>;
};

export default TablePagination;
