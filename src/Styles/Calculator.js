import styled, { css } from 'styled-components'

export const CalculatorElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    padding: 20px;
    margin: 20px;

    div:nth-child(1) {
        font-size: 2rem;
        height: 30px;
    }
`

export const NumKeypad = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: fit-content;
        width: fit-content;

        button {
            cursor: pointer;
            border-radius: 5px;
            height: 40px;
            font-size: 1.5rem;
            transition: all 0.2s ease-in-out;

            &:hover {
                background-color: red;
            }
        }
    }
`