balanceParens = (str) =>
{
    let bracketIsOpen = false;
    let noMoreParen = false;
    let finalString = "";
        
    // Iterates through the string, and tracks whether the bracket is open or closed
    for (let i = 0; i < str.length; i++){
        if (str.indexOf(")", i) == -1 ){
            noMoreParen = true;
        }
        if (str.charAt(i) == "(" && noMoreParen == true){
            continue;
        }else if (str.charAt(i) == "(" && bracketIsOpen == false){
            bracketIsOpen = true;
            finalString += "(";
        }else if (str.charAt(i) == "(" && bracketIsOpen == true){
            continue;
        }else if (str.charAt(i) == ")" && bracketIsOpen == false){
            continue;
        }else if (str.charAt(i) == ")" && bracketIsOpen == true){
            bracketIsOpen = false;
            finalString += ")";
        }else{
            finalString += str.charAt(i);
        }      
    }
    return finalString
    // console.log(str.lastIndexOf("("));
    // console.log(str.lastIndexOf(")"));

    


    // let numberOfOpen = [];
    // let numberOfClosed = [];

    // Create Arrays of closed & Open brackets
    // for (let i = 0; i < str.length; i++){
    //     if (str.charAt(i) == "("){
    //         numberOfOpen.push("(");
    //     }else if (str.charAt(i) == ")"){
    //         numberOfClosed.push(")")
    //     }
    // console.log(numberOfOpen);
    // console.log(numberOfClosed);
    
}
// balanceParens("abc(d)e(fgh))(i)j)k")
// console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p"))
module.exports = { balanceParens }