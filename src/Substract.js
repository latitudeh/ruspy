const substract = async (e) => {
    e[1] = e[1].replaceAll("- ", "");
    e[1] = e[1].split(", ");

    console.log(e[1].reduce((a, b) => a - b));
}

module.exports = substract;