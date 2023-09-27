function generateNumbers(min, max, count) {
    if (!count) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNum);
    }
    return numbers;
}
export { generateNumbers };
