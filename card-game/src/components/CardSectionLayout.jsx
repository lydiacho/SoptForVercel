import styled from 'styled-components';
import Button from '../components/Button';
import Card from '../components/Card';
import { monkeyData } from '../constant/cardData';
import { useState, useMemo } from 'react';


export default function CardSectionLayout({all, setAll, correct, setCorrect, setSuccess}) {

  const [flippedList,setFlippedList] = useState([]);   // 완성된 카드 배열

  // 난이도가 변경될 때마다 카드 배열 재조합/재정렬
  const monkeyList = useMemo(() => {
    return arrayCard(monkeyData);
  }, [all])

  //배열 섞는 함수
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  const monkeyComponentList = monkeyList.map(({id,src}) => 
    <Card 
      key={id} 
      idx={id} 
      src={src} 
      correct={correct} setCorrect={setCorrect} 
      all={all} 
      flippedList={flippedList} setFlippedList={setFlippedList} 
      setSuccess={setSuccess}/>);

  //카드 배열하는 함수
  function arrayCard(arr) {
    shuffle(arr);   
    let tempArray = arr.slice(0,all);

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
        <Button difficulty="Easy" setAll={setAll} setCorrect={setCorrect} flippedList={flippedList}/>
        <Button difficulty="Normal" setAll={setAll} setCorrect={setCorrect} flippedList={flippedList}/>
        <Button difficulty="Hard" setAll={setAll} setCorrect={setCorrect} flippedList={flippedList}/>
      </ButtonBox>
      <CardSection>
        {monkeyComponentList}
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