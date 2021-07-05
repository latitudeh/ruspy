const collection = async e => {
    e[2] = e[2].split(": ");
    e[2][1] = e[2][1].split(", ");

    let type = "Array"

    console.log(type, e[2][1]);
}

module.exports = collection;