module.exports = calculator = (val1, val2) => {
    if (val1 > 0 && val2 > 0)
        if (val1 / val2 > 1.05)
            return true
        else
            return false
    else
        return false
}