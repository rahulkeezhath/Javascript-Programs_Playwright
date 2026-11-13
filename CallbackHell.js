//Pyramid Doom - other
function loginUser(username, password, callback){
    console.log("User Logged in");
    callback("Rahul")
    
}
function getOrder(user, callback){
    console.log("Order Retrived");
    callback("Order1")
    
}
function orderDetails(order, callback){
    console.log("Order Details Retrived");
    callback("Order Details")
    
}
function getPaymentDetails(payment, callback){
    console.log("Payment Status Retrived");
    callback("Payment Status")
    
}
loginUser("Ram","Pwd",function (user){
    getOrder(user,function(order){
        orderDetails(order, function(details){
            getPaymentDetails(details, function(paymentStatus){
                console.log("Final Status is "+paymentStatus);
            })
                
            })
        })

})
