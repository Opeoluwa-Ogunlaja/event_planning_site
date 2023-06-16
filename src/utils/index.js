export const trimArr = (arr = [], length) => {
    if (length > arr.length) return arr

    return arr.slice(0, length)
}