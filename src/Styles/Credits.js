import styled, { css } from 'styled-components'

export const CreditsElement = styled.p`
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;

    a{
        margin: 2px;
        color: orange;
        transition: all 0.2s ease-in-out;

        &:hover{
            color: #EFFFFA;
        }

    }
`