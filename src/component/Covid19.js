import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 20px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 18px;
    background-color: #222222;
`
const Anchor = styled.a`
    color: #A3A3A3;
    :hover{
        color: #A3A3A3CC;
    }
    text-decoration: underline;
`
function Covid19 () {
    return(
        <Wrapper>
            <Anchor href="https://www.airbnb.co.kr/d/covidsafety">에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Anchor>
        </Wrapper>
    )
}

export default Covid19
