function findUniq(arr) {
    const frequency = {};

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (let key in frequency) {
        if (frequency[key] === 1) {
            return parseFloat(key);
        }
    }
}