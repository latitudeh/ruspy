const collection = async e => {
    if (e[3] == "gvar") {
        e[2] = e[2].split(", ");

        console.log("Collection", e[2]);
    } else {
        e[2] = e[2].split(": ");
        e[2][1] = e[2][1].split(", ");

        console.log("Collection", e[2][1]);
    }
}

module.exports = collection;
