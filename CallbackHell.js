//Pyramid Doom - other
function loginUser(username, password, callback){
    console.log("User Logged in as "+username+ " and " +password);
    callback("Ram")
    
}
function getOrder(user, callback){
    console.log("Order Retrived for " + user);
    callback("Order1")
    
}
function orderDetails(order, callback){
    console.log("Order Details Retrived for "+order);
    callback("Order Details")
    
}
function getPaymentDetails(payment, callback){
    console.log("Payment Status of "+payment);
    callback("Success")
    
}
loginUser("Ramadevan","Pwd",function (user){
    getOrder(user,function(order){
        orderDetails(order, function(payment){
            getPaymentDetails(payment, function(paymentStatus){
                console.log("Final Status is "+paymentStatus);
            })
                
            })
        })

})
