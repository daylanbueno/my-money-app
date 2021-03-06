const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'

module.exports = mongoose.connect(url)

mongoose.Error.messages.general.required = " O atributo  '{PATH}' é Obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado  é menor  que o limente mínimo  de '{MIN}'"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado  é maior  que o limente máximo  de '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'. "