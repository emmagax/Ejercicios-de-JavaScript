console.log("=============================================");
console.log("Ejercicio 4");
const a =['Math', 'English', 'Programming'];
const b = ['Geography', 'Spanish', 'Programming'];
console.log(a)
console.log(b)
const similar = () => {
    for(var i=0;i<a.length;i++){
        for(var j=0;j<b.length;j++){
            if(a[i]==b[j]){
                console.log(a[i])
            };
        };
    };
};
similar();