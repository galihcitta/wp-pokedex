import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: ${props => (props.noPadding ? 0 : "20px 15px 10px 15px")};
    padding-bottom: 110px;
    width: 450px;
    @media (max-width: 450px) {
        width: 100%;
    }
`;

Container.defaultProps = {
    noPadding: false,
};
Container.propTypes = {
    /**
      `noPadding` for name of card
      */
    noPadding: PropTypes.bool,
};

export default Container;
