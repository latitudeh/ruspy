const httpserver = require("http");

const http = async e => {
    e[1] = e[1].split(", ");

    let serverip = e[1][0],
        port = Number(e[1][1]);

    /** eval("server" + "='" + e[1][0] + "'");
    eval("port" + "=" + e[1][1]); */ // If you want to use it, make sure u update all the refs to e[1][0] & e[1][1]

    const requestListener = async (req, res) => { };

    const server = httpserver.createServer(requestListener);

    server.listen(port, '127.0.0.1', () => {
        console.log(`Server is running on http://${serverip}:${port}`)
    });
}

module.exports = http;