const formatMove = (data = [], value = "") => {
    return data.filter(item =>
        item.version_group_details.some(
            itemGroup => itemGroup.move_learn_method.name === value,
        ),
    );
};

export default formatMove;
