import React from "react";
import styled from "styled-components";
import { FaMicrophone, FaBox, FaRegComments, FaRegCommentAlt, FaInstagram, FaComment } from "react-icons/fa";


const Footer = styled.footer``

const Top = styled.section`
  height: 380px;
  border-top: 1px solid #ccc;
  overflow: hidden;
`

const TopInner01 = styled.div`
  width: 1278px;
  height: 200px;
  margin: 50px auto;
`

const TopBox = styled.div`
  width: 426px;
  height: 200px;
  padding: 0 15px;
  float: left;
`

const border = {
  borderRight: '1px solid #ccc',
  borderLeft: '1px solid #ccc'
}

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #777;
  margin-bottom: 30px;
`

const Number = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 13px;
  color: #999;
`

const Guide = styled.ul`
  width: 100%;
  padding: 0;
  text-align: center;
`

const GuideLi = styled.li`
  display: inline-block;
  margin-right: 30px;
`

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 43px;
  color: #999;
  background-color: #faf7e8;
`

const Button = styled.button`
  width: 60px;
  height: 25px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 7px;
  background-color: white;
  font-size: 12px;
  color: #777;

  &:active {
    border: none;
    background-color: #999;
    color: white;
  }
`

const Tabs = styled.div`
  margin-bottom: 40px;
`

const Tab = styled.label`
  width: 198px;
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
`

const Tab01 = styled(Tab)`
  border-top: 2px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`

const Tab02 = styled(Tab)`
  background-color: #FAF7E8;
  border-bottom: 1px solid #ccc;
  color: #999;
`

const TopInner02 = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
  border-top: 1px solid #ccc;
`

const Inner = styled.div`
  width: 1278px;
  height: 100%;
  margin: 0 auto;
`

const Left = styled.ul`
  float: left;
  padding: 0;
  margin: 0;
`

const LeftLi = styled.li`
  display: inline-block;
  color: #999;
  line-height: 80px;
  margin-right: 50px;
  position: relative;
  cursor: default;

  &::after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ccc;
    position: absolute;
    top: 50%;
    right: -28px;
    transform: translateY(-50%);
  }

  &:hover {
    text-decoration: underline;
  }
`

const LeftNone = styled(LeftLi)`
  &::after {
    display: none;
  }
`

const Right = styled.ul`
  float: right;
`

const RightLi = styled.li`
  display: inline-block;
  font-size: 24px;
  line-height: 80px;
  margin-left: 20px;
  cursor: pointer;
`

const Mid = styled.section`
  width: 100%;
  background-color: #FAF7E8;
  padding: 30px 0;
  border-top: 1px solid #ccc;
`

const MidInner = styled.div`
  width: 1278px;
  height: 100px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`

const MidText = styled.p`
  font-size: 13px;
  color: #777;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

const Logo = styled.div`
  width: 150px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

const Bottom = styled.section`
  height: 30px;
  background-color: #FAF7E8;
  text-align: center;
  font-size: 11px;
  line-height: 30px;
  color: #999;
  border-top: 1px solid #ccc;
`

export default function BottomFooter() {
  return(
    <div>
      <Footer>
        <Top>
          <TopInner01>
            <TopBox>
              <Title>cs center</Title>
              <Number>070-4647-1868</Number>
              <Text>
                오전 10:00 ~ 오후 7:00<br />
                점심시간 : 오후 12:00 ~ 2:00<br />
                토/일/공휴일 휴무
              </Text>
            </TopBox>

            
            <TopBox style={border}>
              <Title>store guide</Title>

              <Guide>
                <GuideLi>
                  <Icon><FaMicrophone /></Icon>
                  <Text style={{marginBottom: '5px'}}>HELP</Text>
                  <Button>고객센터</Button>
                </GuideLi>

                <GuideLi>
                  <Icon><FaBox /></Icon>
                  <Text style={{marginBottom: '5px'}}>ORDER</Text>
                  <Button>배송조회</Button>
                </GuideLi>

                <GuideLi>
                  <Icon><FaRegComments /></Icon>
                  <Text style={{marginBottom: '5px'}}>Q & A</Text>
                  <Button>상품문의</Button>
                </GuideLi>

                <GuideLi style={{marginRight: 0}}>
                  <Icon><FaRegCommentAlt /></Icon>
                  <Text style={{marginBottom: '5px'}}>REVIEW</Text>
                  <Button>상품후기</Button>
                </GuideLi>
              </Guide>
            </TopBox>


            <TopBox>
              <input type="radio" name="return" id="return01" checked />
              <input type="radio" name="return" id="return02" />

              <Title>return · exchange</Title>

              <Tabs className="tabs">
                <Tab01 className="tab01" htmlFor="return01">배송/택배</Tab01>
                <Tab02 className="tab02" htmlFor="return02">교환/반품</Tab02>
              </Tabs>

              <Text className="text01" style={{marginLeft: '15px', lineHeight: '25px'}}>
                택배:CJ대한통운:1588-1255<br />
                월~금 08:00 ~ 18:00 / 토 09:00 ~ 13:00
              </Text>

              <Text className="text02" style={{marginLeft: '15px'}}>고객센터로 문의해주세요.</Text>
            </TopBox>
          </TopInner01>



          <TopInner02>
            <Inner>
              <Left>
                <LeftLi>HOME</LeftLi>
                <LeftLi>ABOUT US</LeftLi>
                <LeftLi>AGREEMENT</LeftLi>
                <LeftLi style={{color: 'black'}}>PRIVACY POLICY</LeftLi>
                <LeftLi>STORE GUIDE</LeftLi>
                <LeftNone>CS CENTER</LeftNone>
              </Left>

              <Right>
                <RightLi><FaComment /></RightLi>
                <RightLi><FaInstagram /></RightLi>
              </Right>
            </Inner>
          </TopInner02>
        </Top>




        <Mid>
          <MidInner>
            <MidText>
              (주)컨슈머브릿지 / 대표: 신재현, 박성환 / 개인정보보호책임자: 신재현 / 사업자등록번호: 713-86-01467 / 통신판매업신고번호: 제2021-서울강남-02469호<br />
              사업장소재지: 서울 강남구 테헤란로2길 27 패스트파이브 빌딩 9층 915호<br />
              주식회사 컨슈머브릿지는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매중개자로서 중개하는 통신판매에 관여하여서는 통신판매의 당사자가 아니며<br />
              상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
            </MidText>

            <Logo>
              <img src="/img/koke_logo.png" alt="" style={{width: '100%'}} />
            </Logo>
          </MidInner>
        </Mid>




        <Bottom>
          &copy; 2021 Consumer Bridge, Inc, All rights reserved
        </Bottom>
      </Footer>
    </div>
  )
}