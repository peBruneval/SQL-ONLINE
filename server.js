var sql = require('mssql'); 

var config = {
    user: 'sa',
    password: '33RTXCML30393035-P4D',
    server: '88.190.48.222',
    database: 'wds',
    timeout: 1500
}

var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});
/*
// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    var connection;
    socket.on("server", function(s){
        config = {
            user :s.user,
            password :s.password,
            server : s.server,
            database :s.database
        }
        connection = new sql.Connection(config, function(err) {
            socket.emit("result", err);
            console.log("erreur connexion");
        });
    });
    socket.on("query", function(q){
        if(q.indexOf("sys.tables") == -1)
        {
            var request = new sql.Request(connection); // or: var request = connection.request();
            request.query(q, function(err, recordset) {
                if(err)
                    socket.emit("result", err);
                else
                    socket.emit("result", recordset);
            }); 
        }else
        {
            var request = new sql.Request(connection); // or: var request = connection.request();
            request.query(q, function(err, recordset) {
                if(err)
                    socket.emit("result", err);
                else
                    socket.emit("tables", recordset);
            });
        }
         
            
    })
    
});

*/
server.listen(8080);

