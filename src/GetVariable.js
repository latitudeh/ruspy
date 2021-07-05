const collection = require("./Collection");

const gvar = async (file, e) => {
    file = file.find(e => e.includes(e[1])).split("`");

    collection(file);
}

module.exports = gvar;