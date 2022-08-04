import { Link } from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import Sub from './Sub';


const HeaderOuter = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
`

const Header = styled.header`
  width: 100%;
	border-bottom: 1px solid #ccc;
  padding-top: 5px;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
`

const HeaderInner = styled.div`
	width: 1278px;
	margin: 0 auto;
`

const Gnb = styled.ul`
	text-align: right;
  margin-bottom: 20px;
`

const Gnbli = styled.li`
	display: inline-block;
	margin-left: 30px;
	font-size: 13px;
  cursor: pointer;
`

const Lnb = styled.nav`
  width: 100%;
  display: flex;
`

const Lnbli = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`

const Lnblist = styled(Lnbli)`
  &::after {
    display: block;
    content: "";
    width: 0;
    height: 2px;
    background-color: #ff6c57;
    margin: 0 auto;
    margin-top: 5px;
  }

  &:hover::after {
    width: 60%;
    transition: all, 0.3s;
  }
`

const ThirdLnbli = styled(Lnblist)`
  &:hover::after {width: 70%;}
`

const Logo = styled(Lnbli)`
  width: 100px;
  margin: 0 50px;
  transform: translateY(-20px);
`

const LogoImg = {width: '100%'}

export default function TopHeader() {
  return (
    <div>
      <HeaderOuter>
        <Header>
          <HeaderInner>
            <Gnb>
              <Gnbli>회원가입</Gnbli>
              <Gnbli>로그인</Gnbli>
              <Gnbli>장바구니 <FaShoppingBag style={{fontSize: '16px', color: '#777'}} /></Gnbli>
            </Gnb>

            <Lnb>
              <Lnblist>브랜드 검색</Lnblist>
              <Link to='/sub'><Lnblist>모든커피</Lnblist></Link>
              <ThirdLnbli>내 커피 취향테스트</ThirdLnbli>
              <Link to='/'><Logo>
                <img src="/img/koke_logo.png" alt="Logo" style={LogoImg} />
              </Logo></Link>
              <Lnblist>싱글오리진</Lnblist>
              <Lnblist>블렌드</Lnblist>
              <Lnblist>구독하기</Lnblist>
            </Lnb>
          </HeaderInner>
        </Header>
      </HeaderOuter>
    </div>
  )
}