import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";


const DetailWrap = {
  width: '1278px',
  margin: '0 auto',
}

const Top = styled.section`
  width: 100%;
  height: 700px;
  overflow: hidden;
  margin-bottom: 80px;
`

const PdImg = styled.div`
  width: calc(40% - 25px);
  float: left;
  margin-right: 50px;
  overflow: hidden;
  text-align: center;
`

const pdImgInner = {
  width: '110%',
}

const Contents = {
  width: 'calc(60% - 25px)',
  float: 'left'
}

const DetailTitle = styled.h2`
  font-size: 27px;
  margin-bottom: 20px;
  font-weight: bold;
`

const DetailFlavor = styled.p`
  font-size: 20px;
  color: #999;
  margin-bottom: 0;
`

const DetailText = styled.p`
  font-size: 15px;
  margin-bottom: 80px;
`

const OnOff = {
  width: '400px',
  height: '60px',
  backgroundColor: '#ccc',
  borderRadius: '50px',
  position: 'relative',
  marginBottom: '50px',
  textAlign: 'center',
  lineHeight: '50px'
}

const Options = styled.ul`
  overflow: hidden;
  padding: 0;
`

const OptionsOther = styled(Options)``

const OptionsLi = {
  marginBottom: '30px',
}

const firstLi = {
  marginBottom: '40px',
}

const secondLi = {
  marginBottom: '10px',
  height: '30px',
  lineHeight: '30px',
}

const OptionLeft = styled.div`
  width: 15%;
  float: left;
  color: #777;
`

const OptionRight = styled.div`
  width: 85%;
  float: left;
`

const logo = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  float: 'left',
  marginLeft: '10px',
  overflow: 'hidden',
}

const logoImg = {
  width: '100%',
}

const options = {
  width: '80%',
}

const SubsLabel = styled.label`
  display: block;
  width: 100px;
  height: 50px;
  line-height: 45px;
  text-align: center;
  color: #FF6c57;
  font-size: 18px;
  border: 2px solid #FF6c57;
  box-sizing: border-box;
  border-radius: 10px;
  float: left;
  margin-right: 8px;
`

const Purchase = styled.button`
  display: block;
  width: 300px;
  height: 80px;
  border: none;
  background-color: #ff6c57;
  border-radius: 100px;
  color: white;
  font-size: 20px;
  margin: 0 auto 200px auto;

  &:hover {
    border: 2px solid #ff6c57;
    box-sizing: border-box;
    background-color: white;
    color: #ff6c57;
  }
`

const Tabs = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  margin-bottom: 100px;
`

const Blank = styled.div`
  display: inline-block;
  width: 235px;
  border-bottom: 1px solid #ccc;
  transform: translateY(22px);
`

const Tab = styled.div`
  display: inline-block;
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid #ccc;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-sizing: border-box;
`

const Section = styled.section`
  width: 100%;
  margin: 0 auto 200px auto;
`

const Details = styled(Section)`
  position: relative;
  height: 1500px;
  overflow: hidden;
`

const Detail01 = styled.div`
  width: 100%;
  text-align: center;
`

const Gradation = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(to top, white, transparent);
  position: absolute;
  left: 0; bottom: 0;
`

const SectionTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 50px;
`

const Ul = styled.ul`
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
`

const Li = styled.li`
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  padding: 30px 0 20px 0;
`

const DeliveryLeft = styled.p`
  display: block;
  width: 15%;
  float: left;
`

const DeliveryRight = styled.p`
  display: block;
  width: 85%;
  float: left;
`

const Hilight = styled.span`
  font-weight: 500;
  font-size: 17px;
`

const R01 = styled.div`
  width: 10%;
  float: left;
  color: orange;
`

const R02 = styled.p`
  width: 60%;
  float: left;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const R03 = styled.p`
  width: 15%;
  float: left;
  text-align: center;
`

const Q01 = styled.p`
  width: 10%;
  float: left;
  text-align: center;
`

const Q02 = styled(R02)`
  width: 45%;
`

const Q03 = styled.p`
  width: 15%;
  float: left;
  text-align: center;
`

const Write = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: #ff6c57;
  border-radius: 30px;
  color: white;
  float: right;

  &:hover {
    text-decoration: underline;
  }
`

export default function Detail() {
  return(
    <div>
      <div className="DetailWrap" style={DetailWrap}>
        <Top>
          <PdImg>
            <img src="/img/thumbnail_01.jpg" alt="" style={pdImgInner} />
          </PdImg>

          <div className="contents" style={Contents}>
            <DetailTitle>파퓨아뉴기니 모리타</DetailTitle>
            <DetailFlavor>달콤 & 깔끔한</DetailFlavor>
            <DetailText>자스민의 향과 청사과의 달고 상큼함, 오렌지 시럽의 맛이 깔끔하고 쥬시한 커피입니다.</DetailText>
            

            <input type="radio" name="button" id="button01" checked />
            <input type="radio" name="button" id="button02" />
            <div className="on_off" style={OnOff}>
              <label htmlFor="button01" className="button01">한번만 구매</label>
              <label htmlFor="button02" className="button02">구독하기</label>
            </div>


            <Options>
              <li style={firstLi}>
                <OptionLeft>판매가</OptionLeft>
                <OptionRight style={{fontSize: '18px', fontWeight: 'bold'}}>18,000원</OptionRight>
              </li>

              <li style={secondLi}>
                <OptionLeft style={{lineHeigth: '30px'}}>제조사</OptionLeft>
                <OptionRight style={{overflow: 'hidden'}}>
                  <p style={{lineHeight: '30px', float: 'left'}}>영앤도터스</p>
                  <div style={logo}><img src="/img/logo01.png" alt="" style={logoImg} /></div>
                </OptionRight>
              </li>

              <li style={OptionsLi}>
                <OptionLeft>원산지</OptionLeft>
                <OptionRight>브라질, 콜롬비아, 에티오피아</OptionRight>
              </li>
            </Options>

            <hr style={{margin: '50px 0'}} />

            <OptionsOther className="options_other">
              <li style={{marginBottom: '50px'}}>
                <OptionLeft>용량선택</OptionLeft>
                <OptionRight>
                  <select name="gram" id="gram" style={options}>
                    <option value="" selected>--옵션--</option>
                    <option value="200">200g</option>
                    <option value="500">500g + 5,500원</option>
                    <option value="1000">1kg + 13,000원</option>
                  </select>
                </OptionRight>
              </li>

              <li style={{marginBottom: '100px'}}>
                <OptionLeft>분쇄선택</OptionLeft>
                <OptionRight>
                  <select name="beans" id="beans" style={options}>
                    <option value="" selected>--필수선택--</option>
                    <option value="whole">홀빈(분쇄안함)</option>
                    <option value="french">프렌치프레스 분쇄</option>
                    <option value="hand">핸드드립/커피메이커 분쇄</option>
                    <option value="dutch">더치용 분쇄</option>
                    <option value="mocha">모카포트 분쇄</option>
                    <option value="espresso">에스프레소 분쇄</option>
                  </select>
                </OptionRight>
              </li>

              <li className="subscribe">
                <OptionLeft>구독주기</OptionLeft>
                <OptionRight>
                  <input type="radio" name="subscribe" id="subs01" />
                  <input type="radio" name="subscribe" id="subs02" />
                  <input type="radio" name="subscribe" id="subs03" />

                  <SubsLabel htmlFor="subs01" className="subs_label01">1주일</SubsLabel>
                  <SubsLabel htmlFor="subs02" className="subs_label02">2주일</SubsLabel>
                  <SubsLabel htmlFor="subs03" className="subs_label03">한 달</SubsLabel>
                </OptionRight>
              </li>
            </OptionsOther>
          </div>
        </Top>



        <Purchase>구매하기</Purchase>



        <Tabs id="detail">
          <Blank></Blank>
          <Tab style={{borderBottom: 'none'}}><a href="#detail">상품상세정보</a></Tab>
          <Tab><a href="#delivery">배송안내</a></Tab>
          <Tab><a href="#review">상품후기</a></Tab>
          <Tab><a href="#qna">상품문의</a></Tab>
          <Blank></Blank>
        </Tabs>



        <input type="radio" name="more" id="more" />
        <input type="radio" name="more" id="close" />
        <Details className="details">
          <Detail01 className="detail01">
            <img src="/img/Detaile_page_01.jpg" alt="" style={{width: '100%'}} />
          </Detail01>

          <div className="detail02">
            <img src="/img/Detaile_page_02.jpg" alt="" />
          </div>

          <Gradation className="gradation"></Gradation>

          <label htmlFor="more" className="more">상세보기</label>
          <label htmlFor="close" className="close">상세보기 닫기</label>
        </Details>



        <Tabs id="delivery">
          <Blank></Blank>
          <Tab><a href="#detail">상품상세정보</a></Tab>
          <Tab style={{borderBottom: 'none'}}><a href="#delivery">배송안내</a></Tab>
          <Tab><a href="#review">상품후기</a></Tab>
          <Tab><a href="#qna">상품문의</a></Tab>
          <Blank></Blank>
        </Tabs>



        <Section>
          <SectionTitle>배송안내</SectionTitle>


          <Ul>
            <Li>
              <DeliveryLeft>당일 출고안내</DeliveryLeft>
              <DeliveryRight>
                원두커피의 경우 신선한 원두공급을 위해 오후 3시까지 입금 확인된 주문건에 한해 당일 로스팅 후 당일 출고됩니다.
              </DeliveryRight>
            </Li>

            <Li>
              <DeliveryLeft>배송안내</DeliveryLeft>
              <DeliveryRight>
                1. <Hilight>오후 3시</Hilight>까지 입금 확인된 주문건만 당일 로스팅됩니다.<br />
                2. 토, 일요일 및 공휴일 주문건은 다음날 로스팅 후 발송됩니다.<br />
                3. 배송은 출고일부터 1~3일 소요 될 수 있습니다.<br />
                4. 제주, 도서 산간 지역은 추가 요금이 발생 할 수 있습니다.
              </DeliveryRight>
            </Li>

            <Li>
              <DeliveryLeft>교환/반품</DeliveryLeft>
              <DeliveryRight>
                <Hilight>갓 볶은 원두커피는</Hilight> 제조식품으로 교환 및 <Hilight>환불이 불가한 상품</Hilight>입니다.<br />
                <br />
                <br />
                (다음 사항은 교환, 환불이 불가능하오니 양해 부탁드립니다.)<br />
                - 주문시 분쇄옵션사항 선택을 잘못한 경우
                - 기호에 의한 고객님의 단순변심
                단, 제품의 하자로 인한 교환 및 환불은 가능합니다.
              </DeliveryRight>
            </Li>

            <Li style={{border: 'none'}}>
              <DeliveryLeft>주의사항</DeliveryLeft>
              <DeliveryRight>
                - 고객님 부주의로 분쇄옵션사항을 잘못 선택하였을 경우 교환 및 환불이 불가능한점 양해 부탁드립니다.<br />
                - 고객센터로 먼저 연락을 주시면 친절하게 교환 및 반품방법에 대해 안내 해드립니다.<br />
                - 고객님 임의대로 반품, 교환 등을 하여 제품을 보내실 경우, 제품이 유실되거나 처리기간이 길어질 수 있으니 꼭 고객센터(070-4647-1868)로 먼저 연락을 주시면 감사하겠습니다.<br />
                <br />
                <br />
                ※ 반품시 편의점 택배는 이용이 불가합니다.
              </DeliveryRight>
            </Li>
          </Ul>


          <p style={{fontSize: '14px'}}>배송업체: cj대한통운 / 배송비: 2,500원(3만원 이상 무료배송)</p>
        </Section>



        <Tabs id="review">
          <Blank></Blank>
          <Tab><a href="#detail">상품상세정보</a></Tab>
          <Tab><a href="#delivery">배송안내</a></Tab>
          <Tab style={{borderBottom: 'none'}}><a href="#review">상품후기</a></Tab>
          <Tab><a href="#qna">상품문의</a></Tab>
          <Blank></Blank>
        </Tabs>



        <Section>
          <SectionTitle>상품후기</SectionTitle>

          <Ul>
            <Li>
              <R01>★★★★★</R01>
              <R02>봄날의 향기로 피어납니다.</R02>
              <R03>네이버페이 구매자</R03>
              <R03>2022.07.24</R03>
            </Li>

            <Li>
              <R01>★★★★★</R01>
              <R02>믿고삽니다.</R02>
              <R03>koke</R03>
              <R03>2022.07.24</R03>
            </Li>

            <Li>
              <R01>★★★★★</R01>
              <R02>향도 맛도 좋아 재주문했습니다</R02>
              <R03>spring_blend</R03>
              <R03>2022.07.23</R03>
            </Li>

            <Li>
              <R01>★★★★★</R01>
              <R02>봄향기 물씬~~ 늘 애용합니다.</R02>
              <R03>네이버페이 구매자</R03>
              <R03>2022.07.22</R03>
            </Li>

            <Li style={{border: 'none'}}>
              <R01>★★★★★</R01>
              <R02>가성비 좋은 커피, 자주 주문합니다.</R02>
              <R03>네이버페이 구매자</R03>
              <R03>2022.07.22</R03>
            </Li>
          </Ul>


          <Write>상품후기 글쓰기</Write>
        </Section>



        <Tabs id="qna">
          <Blank></Blank>
          <Tab><a href="#detail">상품상세정보</a></Tab>
          <Tab><a href="#delivery">배송안내</a></Tab>
          <Tab><a href="#review">상품후기</a></Tab>
          <Tab style={{borderBottom: 'none'}}><a href="#qna">상품문의</a></Tab>
          <Blank></Blank>
        </Tabs>



        <Section>
          <SectionTitle>상품문의</SectionTitle>


          <Ul>
            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>10</Q01>
              <Q02>배송문의요</Q02>
              <Q03>윤동주</Q03>
              <Q03>13:55</Q03>
              <Q03>답변대기</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>9</Q01>
              <Q02>비율</Q02>
              <Q03>이육사</Q03>
              <Q03>09:20</Q03>
              <Q03>답변대기</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>8</Q01>
              <Q02>원두 양</Q02>
              <Q03>김수영</Q03>
              <Q03>22.07.24</Q03>
              <Q03>답변대기</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>7</Q01>
              <Q02>배송 언제 오나요</Q02>
              <Q03>고은</Q03>
              <Q03>22.07.24</Q03>
              <Q03>답변완료</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>6</Q01>
              <Q02>구매했어요~</Q02>
              <Q03>한용운</Q03>
              <Q03>22.07.24</Q03>
              <Q03>답변완료</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>5</Q01>
              <Q02>반품문의요</Q02>
              <Q03>정지용</Q03>
              <Q03>22.07.23</Q03>
              <Q03>답변완료</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>4</Q01>
              <Q02>배송 문의요</Q02>
              <Q03>김소월</Q03>
              <Q03>22.07.23</Q03>
              <Q03>답변완료</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>3</Q01>
              <Q02>홀릭다크와 스타블렌드</Q02>
              <Q03>이상화</Q03>
              <Q03>22.07.23</Q03>
              <Q03>답변완료</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>2</Q01>
              <Q02>영앤도터스 원두 추천</Q02>
              <Q03>심훈</Q03>
              <Q03>22.07.22</Q03>
              <Q03>답변완료</Q03>
            </Li>

            <Li style={{padding: '20px 0 5px 0'}}>
              <Q01>1</Q01>
              <Q02>재고문의</Q02>
              <Q03>김지하</Q03>
              <Q03>22.07.21</Q03>
              <Q03>답변완료</Q03>
            </Li>
          </Ul>


          <Write>상품문의 글쓰기</Write>
        </Section>
      </div>
    </div>
  )
}