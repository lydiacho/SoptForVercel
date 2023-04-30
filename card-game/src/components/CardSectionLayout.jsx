import styled from 'styled-components';
import Button from '../components/Button';
import Card from '../components/Card';
import { monkeyData } from '../constant/cardData';

//배열 섞는 함수
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//카드 배열하는 함수
function arrayCard(arr) {
  let tempArray = arr.slice(0,7); //끝나는 인덱스는 difficulty에 따라 달라짐

  tempArray = [...tempArray,...tempArray];
  shuffle(tempArray);

  return tempArray;
}

export default function CardSectionLayout() {
  const monkeyList = arrayCard(monkeyData).map((monkey) => <Card key={monkey.id} src={monkey.src}/>);
  
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

  height: 100%;

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
    grid-template-rows: repeat(3, 30rem);
    gap: 2.5rem;

    width: 100%;
    padding: 3rem 5rem;
`