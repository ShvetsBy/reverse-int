module.exports = 
function reverse (n) {
    let result = '';

    if (n < 0) {

        n = n * -1;
        let int = n.toString();
        let arr = Array.from(int);
    } 
    let int = n.toString();
    let arr = Array.from(int).reverse();
    
    for (i = 0; i < arr.length; i++) {
        result = result + arr[i];
}
    
    console.log(result); 
    return result;
    


}

// reverse (123456789)
