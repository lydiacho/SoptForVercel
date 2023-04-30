import styled from 'styled-components';
import Button from '../components/Button';
import Card from '../components/Card';
import { monkeyData } from '../constant/cardData';

//배열 섞는 함수
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default function CardSectionLayout({all, setAll}) {
  const monkeyList = arrayCard(monkeyData).map((monkey) => <Card key={monkey.id} src={monkey.src}/>);

  //카드 배열하는 함수
  function arrayCard(arr) {
    let tempArray = arr.slice(0,all); //끝나는 인덱스는 difficulty에 따라 달라짐

    for (let i=0; i<all; i++) {
      tempArray.push({
        id: tempArray[i].id+10,
        src: tempArray[i].src
      })
    }

    //tempArray = [...tempArray,...tempArray];
    shuffle(tempArray);

    return tempArray;
  }
  
  return (
    <MainSection>
      <ButtonBox>
        <Button difficulty="Easy" setAll={setAll}/>
        <Button difficulty="Normal" setAll={setAll}/>
        <Button difficulty="Hard" setAll={setAll}/>
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