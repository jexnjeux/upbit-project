import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterLogo src="Images/wecoin_blue.svg" />
        <FooterInfo>
          <li>대표번호</li>
          <li>010.7764.9954</li>
          <li>서울시 강남구 테헤란로 427, 위워크타워 8층 강경훈</li>
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
  ${({ theme }) => theme.flex("space-between", "center")};
  margin: 0 auto;
  width: 1440px;
`;

const FooterLogo = styled.img`
  margin-top: 32px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 48px;
  width: 120px;
`;

const FooterInfo = styled.ul`
  ${({ theme }) => theme.flex("center", "center")};
  li {
    margin: 0 16px;
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
`;

const FooterNav = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  li {
    margin: 16px 4px;
    width: 160px;
    font-weight: 700;
    color: #2b2b2b;
    list-style: none;
  }
`;
