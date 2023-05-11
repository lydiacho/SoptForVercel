import React from 'react'
import styled from 'styled-components'

const Skeleton = () => {
  return (
    <St.SkeletonWrapper>
        <St.HeaderBox/>
        <St.ImgBox/>
        <St.DescriptionBox/>
    </St.SkeletonWrapper>
  )
}

export default Skeleton

const St = {
    SkeletonWrapper : styled.article`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;

        width: 20%;
        padding : 2rem 0rem;

        background-color: white;
        border-radius: 1.5rem;
    `,
    HeaderBox : styled.div`
        width: 50%;
        height: 10%;

        border-radius: 1rem;
        background-color:lightgray;
    `,
    ImgBox : styled.section`
        width: 70%;
        height: 45%;

        background-color:lightgray;
        border-radius: 1rem;
    `,
    DescriptionBox : styled.div`
        width: 70%;
        height: 30%;

        background-color: lightgray;
        border-radius: 1rem;
    `

}