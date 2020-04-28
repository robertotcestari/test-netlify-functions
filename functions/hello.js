// require("dotenv").config();

exports.handler = function (event, context, callback) {

    const api_key = process.env.MAILGUN_API;
    const domain = process.env.MAILGUN_DOMAIN;
    const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

    const data = {
      from: "Beto Teste <me@samples.mailgun.org>",
      to: "robertotcestari@gmail.com",
      subject: "Olá das functions!",
      text: "Testing some Mailgun awesomeness!",
    };

    mailgun.messages().send(data, function (error, body) {
        callback(null, {
            statusCode: 200,
            body: 'Tudo Certo!'
        } )
      console.log(body);
    });

};