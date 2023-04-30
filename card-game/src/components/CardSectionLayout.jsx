import styled from 'styled-components';
import Button from '../components/Button';
import Card from '../components/Card';
import { monkeyData } from '../constant/cardData';


export default function CardSectionLayout() {
  const monkeyList = monkeyData.map((monkey) => <Card key={monkey.id} src={monkey.src}/>);
  
  return (
    <MainSection>
      <ButtonBox>
        <Button difficulty="Easy"/>
        <Button difficulty="Normal"/>
        <Button difficulty="Hard"/>
      </ButtonBox>
      <CardSection>
        {monkeyList}
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

const CardSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, 30rem);
    gap: 2rem;

    width: 100%;
    padding: 0rem 5rem;
`