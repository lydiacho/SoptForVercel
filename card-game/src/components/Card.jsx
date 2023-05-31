import styled from 'styled-components';
import resetAll from '../utils/reset';

import { useEffect } from 'react';

export default function Card(props) {

  const {idx,src, correct, setCorrect, all, flippedList, setFlippedList, setSuccess} = props;

  let flag = true;        // 카드 선택 제어 (2개선택시 추가 선택 제한)
  let flippingList = [];  // 실시간으로 뒤집혀진 카드 배열 

  // reset 버튼 클릭 시 카드 초기화
  if (correct === 0) {
    resetAll(flippedList);
  }

  useEffect(() => {
    if (correct === all) {
      setSuccess(true);
    }
  }, [correct]);

  // 카드 뒤집는 함수 
  const flipCard = (e) => {
    if (!flag) {return}                                     //Flag가 false면 진행 X

    let card = e.currentTarget;                             
    card.classList.add('flipped');                          // 뒤집기 
    flippingList.push(card);                                // 현재 뒤집힌 카드 배열에 push

    if (flippingList.length === 2) {                        
      if (flippingList[0].id === flippingList[1].id) {      

        setCorrect(correct+1);                              

        setFlippedList([...flippedList, ...flippingList]);  
        flippingList = [];                                  

      }
      else {                                                
        flag = false;

        setTimeout(() => {
          flippingList[0].classList.remove('flipped');
          flippingList[1].classList.remove('flipped');      

          flippingList = [];                                

          flag = true;
        },500);
      }
    }

  }

  // id : Card의 key값을 다 다르게 부여하기 위해서 10을 더해서 idx를 만들었으니까 같은 id인지 비교하려면 일의자리수만 걸러줘야함 
  return (
    <Wrapper>  
     <OneCard onClick={flipCard} id={idx%10}>
        <CardBack>🙈</CardBack>
        <CardImg src={src}/>
      </OneCard>
    </Wrapper>
  )
}



const Wrapper = styled.li`
  text-align: center;

  background-color:white;
  border-radius : 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem ${({ theme }) => theme.colors.darkGray};
`

const OneCard = styled.section`
  position:relative;

  width:100%;
  height:100%;

  transition: all 0.5s;
  transform-style: preserve-3d;
  &.flipped {
    transform: rotateY(180deg);
  }
`

const CardBack = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;

  border-radius: 1rem;
  background-color: black;
  backface-visibility: hidden;

  font-size: 5rem;
`

const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 1rem;
  backface-visibility: hidden;

  transform: rotateY(180deg);
`
