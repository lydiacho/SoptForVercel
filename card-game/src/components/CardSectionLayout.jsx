import styled from 'styled-components';
import Button from '../components/Button';


export default function CardSectionLayout() {
  return (
    <MainSection>
      <ButtonBox>
        <Button difficulty="Easy"/>
        <Button difficulty="Normal"/>
        <Button difficulty="Hard"/>
      </ButtonBox>
      <CardSection>
        pppp
      </CardSection>
    </MainSection>
  )
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  background-color:${({ theme }) => theme.colors.lightPurple};
  
`

const ButtonBox = styled.article`
  display: flex;
  gap: 1rem;

  margin: 2rem;
`

const CardSection = styled.section`
  
`