import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin-bottom: 5px;

    &:hover,
    &:focus {
        opacity: .8;
    }
`;

export default Button;
