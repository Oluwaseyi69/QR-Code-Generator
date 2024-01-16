Paystack.init({
  publicKey: 'pk_test_a8c8ce366b2aafa93f021e2a345a5f025bc6a7fd'
})

function createPaystackTransaction(amount, email, callback) {
  var paystackAPIUrl = "https://api.paystack.co/transaction/initialize";
  var paystackPublicKey = "pk_test_a8c8ce366b2aafa93f021e2a345a5f025bc6a7fd"; 
  var headers = {
      "Authorization": "Bearer " + paystackPublicKey,
      "Content-Type": "application/json"
  };

  var payload = {
      "amount": amount,
      "email": email,
      "currency": "NGN"  
  };

  $.ajax({
      url: paystackAPIUrl,
      type: "POST",
      headers: headers,
      data: JSON.stringify(payload),
      success: function(response) {
          var transactionRef = response.data.reference;
          callback(transactionRef);
      },
      error: function(error) {
          console.error("Error creating Paystack transaction:", error);
      }
  });
}