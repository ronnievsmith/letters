/*
    A Revealing Module Pattern w Public Namespace 'letters'.
    Includes a single method 'increment'.  To use: letters.increment('z');
    (c) 2016, Ron Royston, MIT License
    https://rack.pub
*/
var letters = (function() {
    
    // object to expose as public properties and methods such as clock.now
    var pub = {};
    var letterArray = [];
    
    //letters.increment('a')
    pub.increment = function (c) {
        letterArray = c.split("");
        
        if(isLetters(letterArray)){
            return(next(c));
        } else {
            throw new Error('Letters Only');
        }                
    };
    
    function isLetters(arr) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i].toLowerCase() != arr[i].toUpperCase()){
            } else {
                return false;
            }
        }
        return true;
    }            
    
    function next(c) {
        var u = c.toUpperCase();
        if (same(u,'Z')){
            var txt = '';
            var i = u.length;
            while (i--) {
                txt += 'A';
            }
            return (txt+'A');
        } else {
            var p = "";
            var q = "";
            if(u.length > 1){
                p = u.substring(0, u.length - 1);
                q = String.fromCharCode(p.slice(-1).charCodeAt(0));
            }
            var l = u.slice(-1).charCodeAt(0);
            var z = nextLetter(l);
            if(z==='A'){
                return p.slice(0,-1) + nextLetter(q.slice(-1).charCodeAt(0)) + z;
            } else {
                return p + z;
            }
        }
    }
    
    function nextLetter(l){
        if(l<90){
            return String.fromCharCode(l + 1);
        }
        else{
            return 'A';
        }
    }
    
    function same(str,char){
        var i = str.length;
        while (i--) {
            if (str[i]!==char){
                return false;
            }
        }
        return true;
    }
    
    //API
    return pub;
}());
