Object.prototype.contain = function(needle) {
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));