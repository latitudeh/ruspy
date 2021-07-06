const fs = require("fs"),
    print = require("./src/Print"),
    sum = require("./src/Sum"),
    substract = require("./src/Substract"),
    multiply = require("./src/Multiply"),
    divide = require("./src/Divide"),
    collection = require("./src/Collection"),
    gcvar = require("./src/GetCollectionVar"),
    nvar = require("./src/NormalVar"),
    gnvar = require("./src/GetNormalVar"),
    http = require("./src/HTTPServer");

const file = fs.readFileSync(process.argv[2]).toString().split("\n");

file.forEach(e => {
    if (e.startsWith("#")) {
        return;
    } else if (e.startsWith("fn")) {
        e = e.split("fn");
        var reArray = [];
        e.forEach(l => {
            l = l.replaceAll("`", "");
            reArray.push(l);
        });

        if (reArray[1].startsWith("print")) {
            print(reArray);
        } else if (reArray[1].startsWith("+")) {
            sum(reArray);
        } else if (reArray[1].startsWith("-")) {
            substract(reArray);
        } else if (reArray[1].startsWith("*")) {
            multiply(reArray);
        } else if (reArray[1].startsWith("/")) {
            divide(reArray);
        }
    } else if (e.startsWith("[]")) {
        e = e.split("`");
        collection(e);
    } else if (e.startsWith("gcvar")) {
        e = e.split("`");
        gcvar(file, e);
    } else if (e.startsWith("<N>")) {
        e = e.split("`");
        nvar(e);
    } else if (e.startsWith("gnvar")) {
        e = e.split("`");
        gnvar(file, e);
    } else if (e.startsWith("http")) {
        e = e.split("`");
        http(e);
    } else if (e.startsWith("")) {
        return;
    } else {
        console.log("Syntax error detected, line:", e);
        process.exit();
    }
});