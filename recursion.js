function recursion(n){
    if (n==0){
        return 1;
    }
    else {
        return n * recursion (n-1);
    }
}
let result = recursion (6);
console .log("The result is : " + result);