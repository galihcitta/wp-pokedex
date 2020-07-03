import styled from "styled-components";

const BodyContent = styled.div`
    display: block;
    padding-top: ${props => (props.noPadding ? 0 : "60px")};
    width: 100%;
`;
export default BodyContent;
