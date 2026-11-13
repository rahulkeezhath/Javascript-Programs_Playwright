function loginUser(Username, Password){
    return new Promise((resolve,reject)=>{
        console.log("User Logged in "+Username +" and Paswword:" +Password)
        resolve("Rahul K")
    })
}

function getOrder(user){
    return new Promise((reslove, reject)=>{
        console.log("Order retrived for user: "+user);
        reslove("Order 1")
    })
}

function orderDetails(order){
    return new Promise((resolve, reject)=>{
        console.log("Payment Status Retrived: "+order);
        resolve("Success")
    })
}
    function getPaymentStatus(payment){
        return new Promise((resolve, reject)=>{
            console.log("Payment Status Retrived for Payment: "+payment);
            resolve("Cleared")
        })
}

loginUser("Raj","Pass")
.then(user=>getOrder(user))
.then(order=>orderDetails(order))
.then(payment=>getPaymentStatus(payment))
.then(paymentStatus=>console.log("Final Status is " +paymentStatus))
.catch(error=>console.log(error))