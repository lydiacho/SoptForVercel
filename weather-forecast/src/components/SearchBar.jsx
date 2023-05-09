import React, { useState } from 'react'
import styled from "styled-components";

const SearchBar = () => {

    const [area, setArea] = useState('');

  return (
    <St.Search>
        <St.Combobox>
            <select name="range">
                <option value="none">==선택==</option>
                <option value="day">오늘</option>
                <option value="week">주간</option>
            </select>
        </St.Combobox>
        <St.InputBox 
            placeholder = "영어로 도시명 검색 (ex-seoul)"
            value = {area}
            onChange = {(e)=>setArea(e.target.value)}/>
        <St.Button>
            날씨 검색
        </St.Button>

    </St.Search>
  )
}

export default SearchBar

const St = {
    Search : styled.section`
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        margin: 2rem;
    `,
    Combobox : styled.form`
        & > select {
            padding: 0.5rem;

            background-color: white;
            border-radius: 0.5rem;

            font-size: 1.5rem;
            color: black;
        }
    `,
    InputBox : styled.input`
        padding: 2rem;
        width: 35%;

        background-color:${({ theme }) => theme.colors.searchBlue};
        border-width: 0rem;
        border-radius: 1rem;

        font-size: 2rem;
    `,
    Button : styled.button`
        padding: 1.5rem;

        background-color:${({ theme }) => theme.colors.buttonBlue};

        font-size: 2rem;
        color:white;
    `
}