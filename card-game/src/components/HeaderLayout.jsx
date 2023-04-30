import styled from 'styled-components';

export default function HeaderLayout() {
  return (
    <GameHeader>
      <h1>🐒숭이를 찾아라!🐒</h1>
      <GameCount>0/5</GameCount>
    </GameHeader>
  )
}

const GameHeader = styled.header`
  text-align: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  padding:4rem;

  background-color: ${({ theme }) => theme.colors.skyBlue};

  color : ${({ theme }) => theme.colors.black};
  font-size: 8rem;

`;

const GameCount = styled.p`
  margin-top: 2rem;
  
  color: ${({ theme }) => theme.colors.darkGray};
`