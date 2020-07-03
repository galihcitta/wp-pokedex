export const randomColourOne = "#50a1d8".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
});
export const randomColourTwo = "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
});
