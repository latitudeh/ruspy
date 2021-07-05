const print = async e => {
    e[1] = e[1].replaceAll("print", "");
    console.log(e[1]);
}

module.exports = print;