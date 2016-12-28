.pragma library

function findRoot(obj){
    if(obj == undefined){
        return undefined;
    }
    var p = obj;
    while(p.parent != undefined){
        p = p.parent;
    }
    return p;
}
