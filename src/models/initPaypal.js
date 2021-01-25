const paypal = require('paypal-rest-sdk');
require("dotenv").config();

const {
   CLIENT__ID,
   CLIENT__SECRET
}
= process.env;
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': CLIENT__ID,
  'client_secret': CLIENT__SECRET
});

function initPaypal(app){
   app.post('/pay', (req, res) => {
      const {price} = req.body;
      console.log(price)
      const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:4000/success",
            "cancel_url": "http://localhost:4000"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Red Sox Hat",
                    "sku": "001",
                    "price": `${price}.00`,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": `${price}.00`
            },
            "description": "Hat for the best team ever"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
          throw error;
      } else {
          for(let i = 0;i < payment.links.length;i++){
            if(payment.links[i].rel === 'approval_url'){
              res.redirect(payment.links[i].href);
            }
          }
      }
    });
    
    });
    app.get('/success', (req, res) => {
      const payerId = req.query.PayerID;
      const paymentId = req.query.paymentId;
    
      const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
      };
    
      paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success');
        }
    });
    });
}
module.exports = initPaypal;