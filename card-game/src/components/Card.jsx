import styled from 'styled-components';


export default function Card({src}) {
  return (
    <OneCard>
      <CardImg src={src}/>
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