import React from "react";
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import subdata from "../component/SubData"
import { FaRegPlusSquare, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Detail from "./Detail";


const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 150px;
`

const Ul = styled.ul`
  width: 1278px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  margin-bottom: 100px;
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
`

const Logo = styled.div`
  width: 70px; height: 70px;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  top: 0; left: 0;
`

const Outline = styled(Logo)`
  border: 1px solid #ccc;
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

export default function Sub() {
  return (
    <div>
      <Title>모든커피</Title>

      <Ul>
        <Link to='/detail'><Li className="li">
          <Image className="image">
            <img src="/img/coffee01.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo02.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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

          <Roastery>[180커피로스터스]</Roastery>
          <Name className="name">율 디캐프 다크</Name>
          <Flavor>#고소 & 부드러운</Flavor>
          <Price>15,800원</Price>  
        </Li></Link>


        <Link to='/detail'><Li className="li">
          <Image className="image">
            <img src="/img/coffee02.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo02.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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

          <Roastery>[180커피로스터스]</Roastery>
          <Name className="name">율 디캐프</Name>
          <Flavor>#밸런스 & 깔끔한</Flavor>
          <Price>15,800원</Price>  
        </Li></Link>


        <Link to='/detail'><Li className="li">
          <Image className="image">
            <img src="/img/coffee03.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo02.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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

          <Roastery>[180커피로스터스]</Roastery>
          <Name className="name">다크 아이보리 블렌드</Name>
          <Flavor>#고소 & 묵직한</Flavor>
          <Price>15,800원</Price>  
        </Li></Link>


        <Link to='/detail'><LastLi className="li">
          <Image className="image">
            <img src="/img/coffee04.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo02.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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

          <Roastery>[180커피로스터스]</Roastery>
          <Name className="name">아이보리 블렌드</Name>
          <Flavor>#밸런스 & 부드러운</Flavor>
          <Price>12,000원</Price>  
        </LastLi></Link>
      </Ul>



      <Ul>
        <Li className="li">
          <Image className="image">
            <img src="/img/coffee05.png" alt="" style={{width: '100%'}} />
            
            <Logo>
              <img src="/img/logo03.png" alt="" style={{width: '100%'}} />
            </Logo>

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
          <Name className="name">케냐AA워시드</Name>
          <Flavor>#상큼 & 부드러운</Flavor>
          <Price>16,000원</Price>  
        </Li>


        <Li className="li">
          <Image className="image">
            <img src="/img/coffee06.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo04.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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
          <Name className="name">W블렌드</Name>
          <Flavor>#쌉쌀 & 묵직한</Flavor>
          <Price>5,500원</Price>  
        </Li>


        <Li className="li">
          <Image className="image">
            <img src="/img/coffee07.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo04.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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
          <Name className="name">F블렌드</Name>
          <Flavor>#고소 & 달콤</Flavor>
          <Price>9,200원</Price>  
        </Li>


        <LastLi className="li">
          <Image className="image">
            <img src="/img/coffee08.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo04.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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
          <Name className="name">R블렌드</Name>
          <Flavor>#밸런스 & 달콤</Flavor>
          <Price>10,400원</Price>  
        </LastLi>
      </Ul>



      <Ul>
        <Li className="li">
          <Image className="image">
            <img src="/img/coffee09.png" alt="" style={{width: '100%'}} />
            
            <Logo>
              <img src="/img/logo05.png" alt="" style={{width: '100%'}} />
            </Logo>

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
            
            <Logo>
              <img src="/img/logo05.png" alt="" style={{width: '100%'}} />
            </Logo>

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
          <Flavor>#달콤 & 꽃향기</Flavor>
          <Price>36,000원</Price>  
        </Li>


        <Li className="li">
          <Image className="image">
            <img src="/img/coffee11.png" alt="" style={{width: '100%'}} />
            
            <Logo>
              <img src="/img/logo05.png" alt="" style={{width: '100%'}} />
            </Logo>

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
          <Price>18,000</Price>  
        </Li>


        <LastLi className="li">
          <Image className="image">
            <img src="/img/coffee12.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo06.jpg" alt="" style={{width: '100%'}} />
            </Outline>

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
        </LastLi>
      </Ul>



      <Ul>
        <Li className="li">
          <Image className="image">
            <img src="/img/coffee13.png" alt="" style={{width: '100%'}} />
            
            <Outline>
              <img src="/img/logo07.jpeg" alt="" style={{width: '100%'}} />
            </Outline>

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
            <img src="/img/coffee14.png" alt="" style={{width: '100%'}} />
            
            <Logo>
              <img src="/img/logo08.png" alt="" style={{width: '100%'}} />
            </Logo>

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

          <Roastery>[디카프워크룸]</Roastery>
          <Name className="name">콜롬비아 수프리모 SW 디카프</Name>
          <Flavor>#달콤 & 고소</Flavor>
          <Price>14,000원</Price>  
        </Li>


        <Li className="li">
          <Image className="image">
            <img src="/img/coffee15.png" alt="" style={{width: '100%'}} />
            
            <Logo>
              <img src="/img/logo09.png" alt="" style={{width: '100%'}} />
            </Logo>

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

          <Roastery>[프레이저 커피]</Roastery>
          <Name className="name">인디언 헤드</Name>
          <Flavor>#쌉쌀 & 묵직한</Flavor>
          <Price>13,000</Price>  
        </Li>


        <LastLi className="li">
          <Image className="image">
            <img src="/img/coffee16.png" alt="" style={{width: '100%'}} />
            
            <Logo>
              <img src="/img/logo10.jpeg" alt="" style={{width: '100%'}} />
            </Logo>

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

          <Roastery>[슬러핀 커피]</Roastery>
          <Name className="name">카라멜 슬럽</Name>
          <Flavor>#고소 & 부드러운</Flavor>
          <Price>13,000원</Price>  
        </LastLi>
      </Ul>




      {/* <div className="container">
        {
          subdata.map((value, i) => {
            return (
              <div className='col-md-3' key={value.id}>
                <img src={value.img} width='280px' />
                <Logo><img src="logo02.jpeg" /></Logo>
                <RoasteryName>{value.roastery}</RoasteryName>
                <Name>{value.title}</Name>
                <Flavor>{value.flavor}</Flavor>
                <Price>{value.price}</Price>
              </div>
            )

          })
        }
      </div> */}
    </div>
  )
}