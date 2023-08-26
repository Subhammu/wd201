const Http = require('http');
const Fs = require('fs');

let Home = "";
let Project = "";
let Registration = "";

const Port = require("minimist")(process.argv.slice(2))

Fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    Home = home;
});

Fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    Project = project;
});


Fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    Registration = registration;
});

const Server = Http.createServer((request, response) => {
        let Url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (Url) {
        case '/project':
            response.write(Project);
            response.end();
            break;
        case '/registration':
            response.write(Registration);
            response.end();
            break;
        default:
            response.write(Home);
            response.end();
            break;

        }
});
Server.listen(Port.port);