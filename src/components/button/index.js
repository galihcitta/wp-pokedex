import styled from "styled-components";

const Button = styled.button`
    background: #fff;
    border: 1px solid transparent;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    display: ${props => (props.block ? "block" : "inline-block")};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    outline: none;
    padding: 0.375rem 0.75rem;
    position: relative;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
`;

export default Button;
