import PropTypes from "prop-types";

export default {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            base_stat: PropTypes.number.isRequired,
            effort: PropTypes.number.isRequired,
            stat: PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }),
        }),
    ).isRequired,
};
