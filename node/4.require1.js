function aa(){
    this.b = 1;
    this.bb = function(){
        console.log(123);
    }
}

var AA = new aa();
AA.bb();


