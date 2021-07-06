const nvar = require("./NormalVar");

const gnvar = async (file, e) => {
    if (e[1] == "") {
        return;
    } else {
        var reArray = [];

        file.forEach(l => {
            l = l.replaceAll("`", "");
            l = l.replaceAll("<N>", "");
            l = l.split(": ");
            reArray.push(l);
        });

        for (let i = 0; i < reArray.length; i++) {
            for (let h = 0; h < reArray[i].length; h++) {
                if (reArray[i][h] == e[1]) {
                    var newArr = [];
                    newArr.push("<N>");
                    newArr.push(reArray[i][h]);
                    reArray[i][h + 1] = reArray[i][h + 1].replaceAll(": ", "");
                    newArr.push(reArray[i][h + 1]);
                    newArr.push("nvar");
                    nvar(newArr);
                }
            }
        }
    }
}

module.exports = gnvar;
