var a = 1;
var b = {
    a : 123,
    b : function(){
        function innerfunc(){
            console.log(this.a);
        }
        innerfunc();
    }
}
b.b();
var c = {
    a : 123,
    b : function(){
            var that = this;
            console.log(that);
            function innerfunc(){
                console.log(that.a);
            }
            innerfunc();
        }
}
c.b();