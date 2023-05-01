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
    let tempArray = arr.slice(0,all);

    //tempArray = [...tempArray,...tempArray];
    //mapping 시 key를 고유하게 부여하기 위해 배열 합치는 과정에서 id를 다르게 설정
    for (let i=0; i<all; i++) {
      tempArray.push({
        id: tempArray[i].id+10,
        src: tempArray[i].src
      })
    }

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

  margin-top: 2rem;
`

const CardSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 23rem);
    gap: 2.5rem;

    width: 100%;
    padding: 3rem 10rem;
`