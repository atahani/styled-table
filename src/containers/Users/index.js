//@flow

import React from "react";
import styled from "styled-components";
import Table from "../../components/Table";
import Avatar from "../../components/Avatar";
import AccountIcon from "../../components/svg-icons/account-detail";

const Main = styled.div`
  padding: 10px 20px 0px 20px;
`;

const NameColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.span`
  margin-left: 8px;
`;

const AccountBtn = styled.button`
  padding: 8px;
  border: none;
  cursor: pointer;
  background: transparent;
`;

const columns = {
  name: {
    key: "name",
    label: "Name",
    content: (item: Object) => (
      <NameColumn>
        <Avatar name={item.name} url={item.url} size={42} />
        <Name>{item.name}</Name>
      </NameColumn>
    )
  },
  email: {
    key: "email",
    label: "Email",
    hideOnPhone: true
  },
  numberOfOrders: {
    key: "numberOfOrders",
    label: "Orders",
    align: "center",
    width: 100,
    hideOnTablet: true,
    hideOnPhone: true
  },
  joinDate: {
    key: "joinDate",
    label: "Join",
    align: "center",
    hideOnTablet: true,
    hideOnPhone: true
  },
  detailLink: {
    key: "detailLink",
    align: "center",
    content: (item: Object) => (
      <AccountBtn>
        <AccountIcon color="#009688" />
      </AccountBtn>
    )
  }
};

const userData = [
  {
    id: 1,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 2,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 3,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 4,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 5,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 6,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 7,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 8,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 9,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  },
  {
    id: 10,
    name: "Ahmad Tahani",
    url:
      "https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg",
    email: "me@atahani.com",
    numberOfOrders: 13,
    joinDate: "3 days ago"
  }
];

const rowConfig = {
  uniqueKey: "id",
  css: `
    height: 73px;
    &:hover {
      background-color: rgba(216, 216, 216, 0.2)};
    }
  `,
  onClick: (e, item) => {
    console.log("row was clicked", item);
  }
};

type Props = {
  location: Object
};

const Users = ({ location }: Props) => {
  const queries = new URLSearchParams(location.search);
  return (
    <Main>
      <Table
        rowConfig={rowConfig}
        columns={columns}
        data={userData}
        totalPages={10}
        currentPage={
          queries.has("page") ? parseInt(queries.get("page"), 10) : 1
        }
        basePageLink={""}
      />
    </Main>
  );
};

export default Users;
