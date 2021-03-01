function cal(mode){
    var funcs = {
        'plus' : function(left,right){return left+right},
        'minus' : function(left,right){return left-right}
    }
    return funcs[mode];
}

console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));