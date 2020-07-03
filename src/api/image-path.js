const imagePath = fileName => {
    return `${process.env.REACT_APP_IMAGE_PATH_DEFAULT}${regexReplaceUrl(
        fileName,
    )}.png`;
};

const regexReplaceUrl = string => {
    return string.match(/\/([^\/]+)\/?$/)[1]; // eslint-disable-line
};

export default imagePath;
