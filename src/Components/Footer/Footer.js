import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterLogo src="Images/wecoin_blue.svg" />
        <FooterInfo>
          <ul>
            <li>대표번호</li>
            <li>010.7764.9954</li>
            <li>서울시 강남구 테헤란로 427, 위워크타워 8층</li>
          </ul>
          <FooterDetail>
            <li>위코인 주식회사</li>
            <li>서울시 강남구 테헤란로 427, 위워크타워 8층</li>
            <li>대표 강경훈</li>
            <li>사업자 등록번호 01077649954</li>
            <li>개인정보보호 책임자 강경훈</li>
          </FooterDetail>
          <span>Copyright © 2020 Wecoin Inc. All rights reserved.</span>
        </FooterInfo>
        <FooterNav>
          <li>회사</li>
          <li>고객지원</li>
        </FooterNav>
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  background-color: #fff;
`;

const FooterContainer = styled.div`
  ${({ theme }) => theme.flex("space-between", "flex-start")};
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 1440px;
`;

const FooterLogo = styled.img`
  text-align: center;
  font-size: 48px;
  width: 120px;
`;

const FooterInfo = styled.div`
  ${({ theme }) => theme.flex("center", "flex-start", "column")};
  ul {
    ${({ theme }) => theme.flex("center", "center")};
  }
  li {
    margin: 0 8px;
    font-size: 14px;
    color: #2b2b2b;
    position: relative;
    padding-right: 16px;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      content: "|";
      color: #ddd;
    }
    &:last-child {
      &:after {
        content: "";
      }
    }
  }
  span {
    margin-top: 16px;
    margin-left: 8px;
    color: #2b2b2b;
    font-size: 14px;
  }
`;

const FooterDetail = styled.ul`
  margin-top: 24px;
  li {
    margin: 0 8px;
    font-size: 13px;
    color: #666;
  }
`;

const FooterNav = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  li {
    margin: 0 4px;
    width: 120px;
    font-weight: 700;
    color: #2b2b2b;
    list-style: none;
  }
`;
