function Human(name,gender,weight){
    this.name=name;
    this.gender=gender;
    this.weight=weight;
    this.speak=function(str){
        return str;
    }
    this.eat= function(object){
        this.weight++;
    }
    this.showObjectName=function(object){
        return object.name;
    }
    this.showObjectGender= function(object){
        return object.gender;
    }
    this.showObjectWeight= function(object){
        return object.weight;
    }
    this.getName= function(str){}
}
function Apple(weight){
    this.weight=10;
}

let Adam= new Human('Adam','Male','60');
let Eva= new Human('Eva','Female','45');
let apple = new Apple();

console.log(Adam.speak('xin chao'));
console.log(Eva.speak('toi la Eva'));
Adam.eat();
console.log('ten ban la '+Adam.showObjectName(Eva));
console.log('can nang cua Adam la '+Eva.showObjectWeight(Adam));
console.log(Adam.showObjectWeight(apple));