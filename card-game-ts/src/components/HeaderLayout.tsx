import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { allState, correctState } from "../recoil/atom";

export default function HeaderLayout() {

  const correct = useRecoilValue<number>(correctState);
  const all = useRecoilValue<number>(allState);

  const countRef = useRef<any>();

  // 카드 일치 시 correct 값이 변하면, 점수판에 0.5초동안 애니메이션 부여
  useEffect(() => {
    countRef.current.classList.add('anim');
    setTimeout(() => {
      countRef.current.classList.remove('anim');
    }, 500);
  }, [correct])
  

  return (
    <GameHeader>
      <h1>🐒숭이를 찾아라!🐒</h1>
      <GameCount ref={countRef}>{correct}/{all}</GameCount>
    </GameHeader>
  )
}

const GameHeader = styled.header`
  text-align: center;

  width: 100%;
  padding:2rem;

  background-image: url('src/assets/헤더숭.png');

  color : ${({ theme }) => theme.colors.black};
  font-size: 6rem;

  border-bottom: 1rem ridge ${({ theme }) => theme.colors.yellow};;

`;

const GameCount = styled.p`
  margin-top: 2rem;
  
  color: ${({ theme }) => theme.colors.darkGray};

  &.anim {
    animation : 1.3s anim-flipX ease
  }

  @keyframes anim-flipX {
      0% {
        opacity: 0;
        transform: rotateX(90def);
      }
      50% {
        opacity: 1;
        transform: rotateX(720deg);
      }
      100% {
        opacity: 1;
        transform: rotateX(720deg);
      }
    }
`
