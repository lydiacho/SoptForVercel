import styled from 'styled-components';


export default function Card() {
  return (
    <OneCard>
      <CardImg src="public/img/숭1.png"/>
    </OneCard>
  )
}

const OneCard = styled.li`
  background-color:white;
  text-align: center;
  padding:1rem;
`

const CardImg = styled.img`
  width:20rem;
  height:100%
`