// call apply bind
const obj = {name: 'cliffhanger'}
function abcd(a,b,c){
    console.log(this,a,b,c)
}

abcd.call(obj);
abcd.apply(obj,[1,2,3])
const laterOn = abcd.bind(obj)
laterOn()