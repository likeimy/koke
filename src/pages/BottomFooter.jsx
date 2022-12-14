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
                ?????? 10:00 ~ ?????? 7:00<br />
                ???????????? : ?????? 12:00 ~ 2:00<br />
                ???/???/????????? ??????
              </Text>
            </TopBox>

            
            <TopBox style={border}>
              <Title>store guide</Title>

              <Guide>
                <GuideLi>
                  <Icon><FaMicrophone /></Icon>
                  <Text style={{marginBottom: '5px'}}>HELP</Text>
                  <Button>????????????</Button>
                </GuideLi>

                <GuideLi>
                  <Icon><FaBox /></Icon>
                  <Text style={{marginBottom: '5px'}}>ORDER</Text>
                  <Button>????????????</Button>
                </GuideLi>

                <GuideLi>
                  <Icon><FaRegComments /></Icon>
                  <Text style={{marginBottom: '5px'}}>Q & A</Text>
                  <Button>????????????</Button>
                </GuideLi>

                <GuideLi style={{marginRight: 0}}>
                  <Icon><FaRegCommentAlt /></Icon>
                  <Text style={{marginBottom: '5px'}}>REVIEW</Text>
                  <Button>????????????</Button>
                </GuideLi>
              </Guide>
            </TopBox>


            <TopBox>
              <input type="radio" name="return" id="return01" checked />
              <input type="radio" name="return" id="return02" />

              <Title>return ?? exchange</Title>

              <Tabs className="tabs">
                <Tab01 className="tab01" htmlFor="return01">??????/??????</Tab01>
                <Tab02 className="tab02" htmlFor="return02">??????/??????</Tab02>
              </Tabs>

              <Text className="text01" style={{marginLeft: '15px', lineHeight: '25px'}}>
                ??????:CJ????????????:1588-1255<br />
                ???~??? 08:00 ~ 18:00 / ??? 09:00 ~ 13:00
              </Text>

              <Text className="text02" style={{marginLeft: '15px'}}>??????????????? ??????????????????.</Text>
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
              (???)?????????????????? / ??????: ?????????, ????????? / ???????????????????????????: ????????? / ?????????????????????: 713-86-01467 / ???????????????????????????: ???2021-????????????-02469???<br />
              ??????????????????: ?????? ????????? ????????????2??? 27 ?????????????????? ?????? 9??? 915???<br />
              ???????????? ????????????????????? ??????????????? ???????????? ?????????????????? ?????? ????????? ?????? ??????????????????????????? ???????????? ??????????????? ?????????????????? ??????????????? ???????????? ?????????<br />
              ????????? ??????, ?????? ??? ?????? ?????? ????????? ????????? ????????? ??? ??????????????? ????????????.
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