import { useState } from 'react';
import styled from 'styled-components';


export default function Card({src}) {
  const [flip,setFlip] = useState(false);

  // 카드 뒤집는 함수 
  const flipCard = () => {
    setFlip(true);
  }

  return (
    <Wrapper>
     <OneCard onClick={flipCard} flip={flip}>
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
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "none")};
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
