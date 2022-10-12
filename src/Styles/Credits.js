import styled, { css } from 'styled-components'

export const CreditsElement = styled.p`
    position: fixed;
    bottom: 0;
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    background: #232C3B;
    padding: 4rem;

    a{
        margin: 2px;
        color: orange;
        transition: all 0.2s ease-in-out;

        &:hover{
            color: #F3D78A;
        }

    }
`