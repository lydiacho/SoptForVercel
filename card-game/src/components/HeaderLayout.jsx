import styled from 'styled-components';

export default function HeaderLayout({correct,all}) {
  return (
    <GameHeader>
      <h1>🐒숭이를 찾아라!🐒</h1>
      <GameCount>{correct}/{all}</GameCount>
    </GameHeader>
  )
}

const GameHeader = styled.header`
  text-align: center;

  width: 100%;
  padding:2rem;

  background-color: ${({ theme }) => theme.colors.skyBlue};

  color : ${({ theme }) => theme.colors.black};
  font-size: 6rem;

`;

const GameCount = styled.p`
  margin-top: 2rem;
  
  color: ${({ theme }) => theme.colors.darkGray};
`