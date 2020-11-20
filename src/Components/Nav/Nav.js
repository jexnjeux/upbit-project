import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav({ isLoggedIn, setIsLoggedIn }) {
  const [categoryCurrent, setCategoryCurrent] = useState(0);
  const [accountCategoryCurrent, setAccountCategoryCurrent] = useState(-1);
  //redux 쓰기 전 nav text 제어를 위한 임시 상태
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  console.log("isLoggedIn2", isLoggedIn);

  const handleClickLogoImg = () => {
    setCategoryCurrent(0);
    setAccountCategoryCurrent(-1);
  };

  const handleCategoryCurrentChange = (index) => {
    setCategoryCurrent(index);
    setAccountCategoryCurrent(-1);
  };

  const handleAccountCurrentChange = (el, index) => {
    if (el.accountCategory === "로그아웃") {
      //redux 쓰기 전 nav text 제어를 위한 임시 상태
      setIsLoggedIn(false);
      setCategoryCurrent(0);
      setAccountCategoryCurrent(-1);
    } else {
      setCategoryCurrent(-1);
      setAccountCategoryCurrent(index);
    }
  };

  return (
    <Fragment>
      <WrapNav>
        <Link to="/">
          <LogoImg src="Images/wecoin_white.svg" onClick={handleClickLogoImg} />
        </Link>
        <WrapCategories>
          {CATEGORIES.map((el, index) => {
            return (
              <Category
                key={index}
                index={index}
                clickIndex={categoryCurrent}
                onClick={() => handleCategoryCurrentChange(index)}
              >
                <Link to={el.url}>{el.category}</Link>
              </Category>
            );
          })}
        </WrapCategories>
        <WrapAccountContainer>
          {(isLoggedIn ? LOGGEDIN : LOGIN).map((el, index) => {
            console.log("isLoggedIn >>", isLoggedIn);
            return (
              <Account
                key={index}
                index={index}
                clickIndex={accountCategoryCurrent}
                onClick={() => handleAccountCurrentChange(el, index)}
              >
                <Link to={el.url}>{el.accountCategory}</Link>
              </Account>
            );
          })}
          <DownLoadIcon>
            <i className="fas fa-th"></i>
          </DownLoadIcon>
        </WrapAccountContainer>
      </WrapNav>
    </Fragment>
  );
}

export default Nav;

const Fragment = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99999;
`;

const WrapNav = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 15px;
  background-color: ${({ theme }) => theme.themeDarkBlue};
`;

const LogoImg = styled.img`
  width: 80px;
`;

const WrapCategories = styled.div`
  margin-left: 40px;
  height: 60px;
  overflow: hidden;
`;

const Category = styled.li`
  display: inline-block;
  width: auto;
  height: 60px;
  margin-left: 40px;
  padding: 25px 0px;
  color: ${({ index, clickIndex }) =>
    index === clickIndex ? "#FFFFFF" : "rgba(165, 175, 202, 0.9)"};
  font-weight: ${({ index, clickIndex }) =>
    index === clickIndex ? "800" : "normal"};

  :hover {
    font-weight: 800;
    cursor: pointer;
  }
`;

const WrapAccountContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 60px;

  @media (max-width: 1050px) {
    display: none;
  }
`;

const Account = styled.div`
  display: block;
  margin-left: 30px;
  color: white;
  font-weight: ${({ index, clickIndex }) =>
    index === clickIndex ? "800" : "normal"};
  font-size: 13px;

  :hover {
    font-weight: 800;
  }
`;

const DownLoadIcon = styled(Account.withComponent("div"))`
  margin-top: 3px;
  font-size: 18px;
  color: rgba(165, 175, 202, 0.9);

  :hover {
    color: white;
  }
`;

const CATEGORIES = [
  {
    id: 1,
    category: "거래소",
    url: "/",
  },
  {
    id: 2,
    category: "입출금",
    url: "/",
  },
  {
    id: 3,
    category: "투자내용",
    url: "/",
  },
  {
    id: 4,
    category: "코인동향",
    url: "/",
  },
  {
    id: 5,
    category: "스테이킹",
    url: "/",
  },
  {
    id: 6,
    category: "고객센터",
    url: "/",
  },
];

const LOGIN = [
  {
    id: 1,
    accountCategory: "로그인",
    url: "/SignIn",
  },
  {
    id: 2,
    accountCategory: "회원가입",
    url: "/SignUp",
  },
];

const LOGGEDIN = [
  {
    id: 1,
    accountCategory: "로그아웃",
    url: "/",
  },
  {
    id: 2,
    accountCategory: "마이페이지",
    url: "/",
  },
];
