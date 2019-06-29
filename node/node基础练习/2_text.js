function Person(){
    this.sleep = function(){
        console.log('sleep in the night'); 
    };
    this.eat = function(){
        console.log('eat in everytime');
    }
}

module.exports = Person;