export default () => {
    const storage = localStorage;
    return {
        save: (value = String, item) =>
            storage.setItem(value, JSON.stringify(item)),
        get: (value = String) => JSON.parse(storage.getItem(value)),
        remove: (value = String) => storage.removeItem(value),
    };
};
