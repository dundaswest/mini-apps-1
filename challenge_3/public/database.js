'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('monogogogogogo');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9kYXRhYmFzZS5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25uZWN0IiwiZGIiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXQyxRQUFRLFVBQVIsQ0FBZjtBQUNBRCxTQUFTRSxPQUFULENBQWlCLDBCQUFqQjtBQUNBLElBQUlDLEtBQUtILFNBQVNJLFVBQWxCO0FBQ0FELEdBQUdFLEVBQUgsQ0FBTSxPQUFOLEVBQWNDLFFBQVFDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsRUFBMkIsbUJBQTNCLENBQWQ7QUFDQUgsR0FBR00sSUFBSCxDQUFRLE1BQVIsRUFBZSxZQUFVO0FBQ3ZCSCxVQUFRSSxHQUFSLENBQVksZ0JBQVo7QUFDRCxDQUZEIiwiZmlsZSI6ImRhdGFiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvMzAwMCcpO1xudmFyIGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbmRiLm9uKCdlcnJvcicsY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsJ2Nvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ21vbm9nb2dvZ29nb2dvJyk7XG59KTtcbiJdfQ==