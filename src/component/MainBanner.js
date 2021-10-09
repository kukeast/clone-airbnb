import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 186px 80px 40px;
    height: 490px;
    background-image: url("https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=1920");
    background-size: cover;
    background-position-x: center;
    background-position-y: bottom;
`
const Contents = styled.div`
    color: #222222;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`
const Title = styled.p`
    margin: 0 0 16px;
`

function MainBanner () {
    return(
        <Wrapper>
            <Contents>
                <Title>어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!</Title>
                <Button/>
            </Contents>
        </Wrapper>
    )
}

export default MainBanner
