// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((acc, item, index) => {
        if (index % 2 !== 0) {
            item = item.reverse();
        }
        acc = acc.concat(item);
        return acc;
    }, []);
}
