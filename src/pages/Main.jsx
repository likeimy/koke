import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight, FaRegPlusSquare, FaHeart, FaShoppingCart } from "react-icons/fa";

const MainVisual = styled.section`
  width: 100%; height: 800px;
  background: url('/img/visual_main_bg.jpg') no-repeat;
  background-size: cover;
  background-attachment: local;
  position: relative;
  overflow: hidden;
`

const MainVisualInner = styled.div`
  width: 100%;
`

const mainImg = {
  width: '100%',
  transform: 'translateY(-20%)'
}

const MainVisualText = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const MainTitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 5px;
`

const MainSub = styled.p`
  margin-bottom: 80px;
  font-size: 20px;
`

const MainBtn = styled.button`
  width: 300px;
  height: 70px;
  border: none;
  border-radius: 60px;
  background-color: #ff6c57;
  color: white;
  font-size: 18px;

  &:hover {text-decoration: underline;}
`

const Roasterys = styled.section`
  width: 1278px;
  margin: 200px auto;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`

const SectionSub = styled.p`
  text-align: center;
`

const RoasterysUl = styled.ul`
  width: 100%;
  height: 188px;
  padding: 0;
`

const RoasterysLi = styled.li`
  width: 188px;
  height: 188px;
  margin-right: 30px;
  float: left;
  position: relative;
`

const RoasterysLis = styled(RoasterysLi)`
  margin: 0;
`

const RoasterysInner = styled.div`
  width: 100%;
  height: 188px;
  overflow: hidden;
  position: relative;
`

const LiImg = styled.div`
  width: 100%;
`

const LiLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 1;
`

const Outline = styled(LiLogo)`
  border: 1px solid #ccc;
`

const LiText = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  line-height: 40px;
  position: absolute;
  bottom: -40px;
`

const LiTxt = styled.p`
  font-size: 15px;
  color: white;
`

const Products = styled.section`
  margin-bottom: 200px;
`

const Introduce = styled.div`
  width: 1278px;
  height: 280px;
  margin: 150px auto 80px auto;
`

const RoasteryImg = styled.div`
  width: calc(70% - 15px);
  float: left;
  margin-right: 30px;
  position: relative;
`

const RoasteryImg01 = styled(RoasteryImg)`
  margin-right: 0;
  margin-left: 30px;
`

const RightImg = styled.div`
  width: calc(100% - 50px);
  margin-left: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`

const LeftImg = styled(RightImg)`
  margin-left: 0;
  margin-right: 50px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const Img = styled.div`
  width: 33.333333%;
  float: left;
`

const BigLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 0; top: 50%;
  transform: translateY(-50%);
`

const BigLogo01 = styled(BigLogo)`
  left: calc(100% - 100px);
`

const Explain = styled.div`
  width: calc(30% - 15px);
  float: left;
`

const ExTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 20px;
`

const ExTitle01 = styled(ExTitle)`
  text-align: right;
`

const ExText = styled.p`
  font-size: 15px;
`


const UlOuter = styled.div`
  width: 100%;
  height: 600px;
  background-color: #FAF7E8;
`

const Ul = styled.ul`
  width: 1278px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  margin-bottom: 100px;
  padding-top: 90px;
`

const Li = styled.li`
  width: 297px;
  margin-right: 30px;
  float: left;
`

const LastLi = styled(Li)`
  margin: 0;
`

const Image = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: white;
  margin-bottom: 20px;
`

const Hover = styled.div`
  position: absolute;
  bottom: 0; right: 10px;
  display: none;
`

const HoverInner = styled.div`
  width: 30px; height: 30px;
  border-radius: 50%;
  background-color: #999;
  margin-bottom: 5px;
  text-align: center;
`

const icon = {
  fontSize: '16px',
  lineHeight: '32px',
  color: 'white',
}

const Roastery = styled.p`
  text-align: center;
  font-size: 16px;
  cursor: default;
`

const Name = styled.h3`
  text-align: center;
  font-size: 17px;
  cursor: default;
`

const Flavor = styled.p`
  font-size: 16px;
  color: #999;
  text-align: center;
  cursor: default;
`

const Price = styled.p`
  font-weight: bold;
  color: black;
  margin-top: 15px;
  text-align: center;
  cursor: default;
`


export default function Main() {
  return (
    <div>
      <MainVisual>
        <MainVisualInner>
          <img src="/img/visual_main.png" alt="" style={mainImg} />
        </MainVisualInner>

        <MainVisualText>
          <MainTitle>
            한 번쯤 마셔보고 싶었던<br />
            커피 맛집 로스터리의 원두
          </MainTitle>

          <MainSub>
            커피 맛있다고 소문난 로스터리의 원두가 다 있어요.<br />
            3일 내 로스팅된 원두로 신선하게 즐기세요.
          </MainSub>

          <MainBtn>
            모든커피 보러가기<FaLongArrowAltRight style={{marginLeft: '10px'}} />
          </MainBtn>
        </MainVisualText>
      </MainVisual>



      <Roasterys>
        <SectionTitle>HOT ROASTERY</SectionTitle>
        <SectionSub>지금 가장 핫한 로스터리를 만나보세요.</SectionSub>


        <RoasterysUl>
          <RoasterysLi className="roasterys_li">
            <LiLogo>
              <img src="/img/logo03.png" alt="" style={{width: '100%'}} />
            </LiLogo>

            <RoasterysInner>
              <LiImg>
                <img src="/img/roastery01.png" alt="" style={{width: '100%'}}/>
              </LiImg>

              <LiText className="li_text">
                <LiTxt>브니엘 커피 로스터스</LiTxt>
              </LiText>
            </RoasterysInner>
          </RoasterysLi>


          <RoasterysLi className="roasterys_li">
            <Outline>
              <img src="/img/logo11.png" alt="" style={{width: '100%'}} />
            </Outline>

            <RoasterysInner>
              <LiImg>
                <img src="/img/roastery02.png" alt="" style={{width: '100%'}}/>
              </LiImg>

              <LiText className="li_text">
                <LiTxt>식물학 커피로스터스</LiTxt>
              </LiText>
            </RoasterysInner>
          </RoasterysLi>


          <RoasterysLi className="roasterys_li">
            <Outline>
              <img src="/img/logo04.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

            <RoasterysInner>
              <LiImg>
                <img src="/img/roastery03.jpeg" alt="" style={{width: '100%'}}/>
              </LiImg>

              <LiText className="li_text">
                <LiTxt>리플로우 커피 로스터스</LiTxt>
              </LiText>
            </RoasterysInner>
          </RoasterysLi>


          <RoasterysLi className="roasterys_li">
            <LiLogo>
              <img src="/img/logo05.png" alt="" style={{width: '100%'}} />
            </LiLogo>

            <RoasterysInner>
              <LiImg>
                <img src="/img/roastery04.png" alt="" style={{width: '100%'}}/>
              </LiImg>

              <LiText className="li_text">
                <LiTxt>나무사이로</LiTxt>
              </LiText>
            </RoasterysInner>
          </RoasterysLi>


          <RoasterysLi className="roasterys_li">
            <Outline>
              <img src="/img/logo06.jpg" alt="" style={{width: '100%'}} />
            </Outline>

            <RoasterysInner>
              <LiImg>
                <img src="/img/roastery05.png" alt="" style={{width: '100%'}}/>
              </LiImg>

              <LiText className="li_text">
                <LiTxt>수수커피</LiTxt>
              </LiText>
            </RoasterysInner>
          </RoasterysLi>


          <RoasterysLis className="roasterys_li">
            <Outline>
              <img src="/img/logo07.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

            <RoasterysInner>
              <LiImg>
                <img src="/img/roastery06.jpeg" alt="" style={{width: '100%'}}/>
              </LiImg>

              <LiText className="li_text">
                <LiTxt>오드이븐</LiTxt>
              </LiText>
            </RoasterysInner>
          </RoasterysLis>
        </RoasterysUl>
      </Roasterys>



      <Products>
        <SectionTitle>커피 맛집 원두 여기 다 모았어요</SectionTitle>
        <SectionSub>다양한 커피 중에서 내가 좋아하는 맛으로 즐겨요.</SectionSub>

        <Introduce>
          <RoasteryImg>
            <RightImg>
              <Img><img src="/img/roastery01.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery01-1.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery01-2.png" alt="" style={{width: '100%'}} /></Img>
            </RightImg>

            <BigLogo><img src="/img/logo03.png" alt="" style={{width: '100%'}} /></BigLogo>
          </RoasteryImg>


          <Explain>
            <ExTitle>[브니엘 커피로스터스]</ExTitle>

            <ExText>
            브니엘 커피 로스터스는 스페셜티 커피업이 지향하는 지속가능성을 산지 농부들에게만 관심을 두는 것이 아니라 이 땅의 소외받는 약자들에게 실현하는 것을 목표로 세운 회사입니다.<br />
            <br />
            "컵에서 신의 얼굴을 보았다" 게이샤 커피가 등장했을 때 심사위원이 했던 저 말처럼 스페셜티 커피를 처음 접하는 사람들께 같은 감동을 드리기 위해 노력합니다.
            </ExText>
          </Explain>
        </Introduce>


        <UlOuter>
          <Ul>
            <Li className="li">
              <Image className="image">
                <img src="/img/coffee05.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[브니엘 커피로스터스]</Roastery>
              <Name className="name">케냐 AA 워시드</Name>
              <Flavor>#상큼 & 부드러운</Flavor>
              <Price>16,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee05-2.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[브니엘 커피로스터스]</Roastery>
              <Name className="name">젠틀레인 디카페인</Name>
              <Flavor>#밸런스 & 달콤</Flavor>
              <Price>13,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee05-3.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[브니엘 커피로스터스]</Roastery>
              <Name className="name">에티오피아 아리차 스페셜 G1 내추럴</Name>
              <Flavor>#과일 & 꽃향기</Flavor>
              <Price>15,000원</Price>  
            </Li>


            <LastLi className="li">
              <Image className="image">
                <img src="/img/coffee05-4.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[브니엘 커피로스터스]</Roastery>
              <Name className="name">마이로맨스</Name>
              <Flavor>#화사한 & 꽃향기</Flavor>
              <Price>13,000원</Price>  
            </LastLi>
          </Ul>
        </UlOuter>



        <Introduce>
          <Explain>
            <ExTitle01>[식물학 커피로스터스]</ExTitle01>

            <ExText>
            "회색 빛 도심을 초록으로 물들이자"라는 이념 아래 퀄리티 높은 스페셜티 커피를 즐길 수 있는 그린 스페이스를 지향 합니다.<br />
            <br />
            저희가 만드는 커피가 고객님들의 몸과 마음에 힐링이 되기를 소망하며 커피를 만들어가고 있습니다.
            </ExText>
          </Explain>


          <RoasteryImg01>
            <LeftImg>
              <Img><img src="/img/roastery02.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery02-1.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery02-2.png" alt="" style={{width: '100%'}} /></Img>
            </LeftImg>

            <BigLogo01><img src="/img/logo03.png" alt="" style={{width: '100%'}} /></BigLogo01>
          </RoasteryImg01>
        </Introduce>


        <UlOuter>
          <Ul>
            <Li className="li">
              <Image className="image">
                <img src="/img/coffee17.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[식물학 커피로스터스]</Roastery>
              <Name className="name">리들리</Name>
              <Flavor>#밸런스 & 견과류</Flavor>
              <Price>15,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee17-2.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[식물학 커피로스터스]</Roastery>
              <Name className="name">과테말라 팔렌시아 엘 소코로 풀리워시드</Name>
              <Flavor>#밸런스 & 달콤</Flavor>
              <Price>22,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee17-3.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[식물학 커피로스터스]</Roastery>
              <Name className="name">마리모</Name>
              <Flavor>#고소 & 쌉쌀</Flavor>
              <Price>13,000원</Price>  
            </Li>


            <LastLi className="li">
              <Image className="image">
                <img src="/img/coffee17-4.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[식물학 커피로스터스]</Roastery>
              <Name className="name">몬스테라</Name>
              <Flavor>#과일 & 깔끔한</Flavor>
              <Price>18,000원</Price>  
            </LastLi>
          </Ul>
        </UlOuter>



        <Introduce>
          <RoasteryImg>
            <RightImg>
              <Img><img src="/img/roastery03.jpeg" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery03-1.jpeg" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery03-2.jpeg" alt="" style={{width: '100%'}} /></Img>
            </RightImg>

            <BigLogo><img src="/img/logo04.jpeg" alt="" style={{width: '100%'}} /></BigLogo>
          </RoasteryImg>


          <Explain>
            <ExTitle>[리플로우 커피 로스터스]</ExTitle>

            <ExText>
            리플로우 커피 로스터스는 고객들이 부담 없는 가격으로 스페셜티 커피를 즐길 수 있게 합니다.<br />
            <br />
            이는 커피의 품질에 대한 타협에서도, 공정 과정에서 들어가는 노력에 대한 타협에서도 나오는 것이 아닙니다. 오롯이 고객들을 생각하는 마음의 결과물일 뿐입니다.<br />
            <br />
            가장 맛있으면서도 가장 편안한 스페셜티 커피, 이것이 리플로우 커피 로스터스의 지향점입니다.
            </ExText>
          </Explain>
        </Introduce>


      <UlOuter>
          <Ul>
            <Li className="li">
              <Image className="image">
                <img src="/img/coffee06.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[리플로우 커피 로스터스]</Roastery>
              <Name className="name">W 블렌드</Name>
              <Flavor>#쌉쌀 & 묵직한</Flavor>
              <Price>5,500원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee07.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[리플로우 커피 로스터스]</Roastery>
              <Name className="name">F 블렌드</Name>
              <Flavor>#고소 & 달콤</Flavor>
              <Price>9,200원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee08.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[리플로우 커피 로스터스]</Roastery>
              <Name className="name">R 블렌드</Name>
              <Flavor>#밸런스 & 달콤</Flavor>
              <Price>10,400원</Price>  
            </Li>
          </Ul>
        </UlOuter>



        <Introduce>
          <Explain>
            <ExTitle01>[나무사이로]</ExTitle01>

            <ExText>
            2002년에 시작한 나무사이로는 한 잔의 커피로 우리의 일상이 풍요로워지기를 바랍니다.<br />
            <br />
            지속적으로 산지를 방문하여 농부•생산업자와 소통하며 좋은 재료와 논리적인 로스팅, 철저한 품질관리를 기반으로 커피가 가진 다양한 매력을 소개합니다.
            </ExText>
          </Explain>


          <RoasteryImg01>
            <LeftImg>
              <Img><img src="/img/roastery04.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery04-1.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery04-2.png" alt="" style={{width: '100%'}} /></Img>
            </LeftImg>

            <BigLogo01><img src="/img/logo05.png" alt="" style={{width: '100%'}} /></BigLogo01>
          </RoasteryImg01>
        </Introduce>


        <UlOuter>
          <Ul>
            <Li className="li">
              <Image className="image">
                <img src="/img/coffee09.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[나무사이로]</Roastery>
              <Name className="name">나비</Name>
              <Flavor>#꽃향기 & 과일</Flavor>
              <Price>23,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee10.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[나무사이로]</Roastery>
              <Name className="name">그레이프</Name>
              <Flavor>#꽃향기 & 달콤</Flavor>
              <Price>36,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee11.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[나무사이로]</Roastery>
              <Name className="name">몽상스</Name>
              <Flavor>#밸런스 & 달콤</Flavor>
              <Price>18,000원</Price>  
            </Li>


            <LastLi className="li">
              <Image className="image">
                <img src="/img/coffee11-02.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[나무사이로]</Roastery>
              <Name className="name">스트로베리</Name>
              <Flavor>#과일 & 달콤</Flavor>
              <Price>36,000원</Price>  
            </LastLi>
          </Ul>
        </UlOuter>



        <Introduce>
          <RoasteryImg>
            <RightImg>
              <Img><img src="/img/roastery05.png" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery05-1.jpg" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery05-2.jpg" alt="" style={{width: '100%'}} /></Img>
            </RightImg>

            <BigLogo><img src="/img/logo06.jpg" alt="" style={{width: '100%'}} /></BigLogo>
          </RoasteryImg>


          <Explain>
            <ExTitle>[수수커피]</ExTitle>

            <ExText>
            수수커피는 '수수하다'라는 사전적 의미처럼 꾸미지 않고 커피가 가진 본연의 맛을 추구합니다.<br />
            <br />
            생두가 한 잔의 커피가 되기까지 여정의 마무리는 결국 '마시는 사람'입니다. 커피를 내려 마실 때 그 원두가 가진 스토리를 알고 있는지, 어떤 페어링을 하는지, 어떤 부분에서 어떤 노트를 찾는지에 따라 한 잔에 대한 감각은 달라질 수 있습니다.<br />
            <br />
            저희는 마시는 사람에게 아직은 낯선 원두에 설레는 호기심을 불어 넣고, 취향으로서의 커피를 즐길 수 있게 돕고자 합니다.
            </ExText>
          </Explain>
        </Introduce>


      <UlOuter>
          <Ul>
            <Li className="li">
              <Image className="image">
                <img src="/img/coffee12.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[수수커피]</Roastery>
              <Name className="name">모카 돈 엘킨</Name>
              <Flavor>#고소 & 꽃향기</Flavor>
              <Price>32,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee12-02.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[수수커피]</Roastery>
              <Name className="name">데일리뷰티 블렌드</Name>
              <Flavor>#초콜릿 & 달콤</Flavor>
              <Price>13,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee12-03.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[수수커피]</Roastery>
              <Name className="name">노네임 블렌드</Name>
              <Flavor>#고소 & 달콤</Flavor>
              <Price>15,000원</Price>  
            </Li>


            <LastLi className="li">
              <Image className="image">
                <img src="/img/coffee12-04.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[수수커피]</Roastery>
              <Name className="name">수수블렌드</Name>
              <Flavor>#상큼 & 깔끔한</Flavor>
              <Price>16,000원</Price>  
            </LastLi>
          </Ul>
        </UlOuter>



        <Introduce>
          <Explain>
            <ExTitle01>[오드이븐]</ExTitle01>

            <ExText>
            "당신의 일상에 색다른 쉼터"<br />
            홀수와 짝수를 의미하는 오드이븐은 커피의 대중성과 전문성을 함께 하기 위해 노력하고 있습니다.<br />
            <br />
            "누구나 편안하게 마시는 커피와 기억에 남는 커피를 전해드리는 것을 추구합니다."<br />
            한잔의 커피가 당신의 평범한 일상에 행복한 변화가 있기를 바랍니다.
            </ExText>
          </Explain>


          <RoasteryImg01>
            <LeftImg>
              <Img><img src="/img/roastery06.jpeg" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery06-1.jpeg" alt="" style={{width: '100%'}} /></Img>
              <Img><img src="/img/roastery06-2.jpeg" alt="" style={{width: '100%'}} /></Img>
            </LeftImg>

            <BigLogo01><img src="/img/logo07.jpeg" alt="" style={{width: '100%'}} /></BigLogo01>
          </RoasteryImg01>
        </Introduce>


        <UlOuter>
          <Ul>
            <Li className="li">
              <Image className="image">
                <img src="/img/coffee13.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[오드이븐]</Roastery>
              <Name className="name">오드 블렌드</Name>
              <Flavor>#달콤 & 밸런스</Flavor>
              <Price>12,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee13-2.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[오드이븐]</Roastery>
              <Name className="name">피크 블렌드</Name>
              <Flavor>#밸런스 & 달콤</Flavor>
              <Price>10,000원</Price>  
            </Li>


            <Li className="li">
              <Image className="image">
                <img src="/img/coffee13-3.png" alt="" style={{width: '100%'}} />

                <Hover className="hover">
                  <HoverInner>
                    <FaRegPlusSquare style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaHeart style={icon} />
                  </HoverInner>

                  <HoverInner>
                    <FaShoppingCart style={icon} />
                  </HoverInner> 
                </Hover>
              </Image>

              <Roastery>[오드이븐]</Roastery>
              <Name className="name">이븐 블렌드</Name>
              <Flavor>#고소 & 묵직한</Flavor>
              <Price>11,000원</Price>  
            </Li>
          </Ul>
        </UlOuter>
      </Products>
    </div>
  )
}