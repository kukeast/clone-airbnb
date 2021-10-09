import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    font-size: 18px;
    font-weight: 800;
    border-radius: 54px;
    border-width: 1px;
    padding: 22px 56px;
    transition: 0.3s;
    box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);
    :hover{
        box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);
    }
    :active{
        transform: scale(0.96);
    }
    cursor: pointer;
    span {
        background: linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

function Button () {
    return(
        <Wrapper>
            <span>유연한 검색</span>
        </Wrapper>
    )
}

export default Button
