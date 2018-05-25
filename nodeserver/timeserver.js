/*
  Listen in on TCP server connections and log time of connection
*/

const net = require('net');
const port = process.argv[2] || 8000;



const server = net.createServer( function(socket) {
    const date = new Date();

    const zeroCheck = function(n) {
        return n < 10 ? '0' + n: n;
    }

    let y = date.getFullYear();
    let m = zeroCheck( date.getMonth() + 1 );
    let d = zeroCheck( date.getDate() );
    let h = zeroCheck( date.getHours() );
    let mn = zeroCheck( date.getMinutes() );

    let log = y + '-' + m + '-' + d + ' ' + h + ':' + mn;

    socket.write(log);
    socket.end('\n');

}).on('error', (err) => {
  throw err
});


server.listen(port);
