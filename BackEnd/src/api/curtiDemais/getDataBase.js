var request = require("request");
var CurtiDemais = require('./curti');
var async = require('async');
var paginas = [];
var ASYNC_LIMIT = 40;
var options = {
  method: 'GET',
  headers: {
    'postman-token': '2b9a85cf-7ef6-fefa-5e21-554d495a592c',
    'cache-control': 'no-cache',
    authorization: 'Bearer cc49bd30529c10a135c2ecfebf014950de213b046caa3c0a1bca79c33eb557e7'
  }
};

for (var i = 1; i <= 50; i++) {
  paginas.push(i.toString());
}

CurtiDemais.remove({}, function name(err) {
  console.log(err);
  criaBaseDeDados();
});

function criaBaseDeDados() {
  async.eachLimit(paginas, ASYNC_LIMIT, function (pagina, cb) {
    request(`https://api.dribbble.com/v1/shots?page=${pagina}?per_page=100`, options, function (err, response, body) {
      if (err) console.log("Erro:" + err);
      var data = JSON.parse(body.toString());
      async.each(data, function (shot, cb) {
        console.log('------', shot.id);
        var curtiDemaisToSave;
        curtiDemaisToSave = new CurtiDemais(shot);

        CurtiDemais.findOne({
          "id": shot.id
        }, function (err, result) {
          if (!result) {
            // Salva no Banco
            curtiDemaisToSave.save();
          }
          return cb();
        });
      }, cb);
    });
  }, function (err, result) {
    console.log(result);
    console.log(err);
  });
}
