const CurtiDemais = require('./curti')

CurtiDemais.methods(['get', 'post', 'put', 'delete'])
CurtiDemais.updateOptions({new: true, runValidators: true})


module.exports = CurtiDemais