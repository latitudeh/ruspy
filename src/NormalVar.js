const nvar = async (e) => {
    if (e[3] == "nvar") {
        console.log("NormalVar", e[2]);
    } else {
        e[2] = e[2].split(": ");

        console.log("NormalVar", e[2][1]);
    }
}

module.exports = nvar;