import {encoded, translations} from './data.js'

console.log("Let's rock")


const unicId = {};
function changeId(){
    encoded.forEach((item) => {
        for (const key in item) {
            if(key.indexOf('Id') !== -1){
                if (translations[item[key]] !== undefined){

                    item[key] = translations[item[key]];
                    
                }
                else{
                    unicId[key] = item[key];
                    
                }
            }
        }
    });
}


changeId();
console.log(encoded, translations)
console.log(unicId);
// console.log(decoded)
