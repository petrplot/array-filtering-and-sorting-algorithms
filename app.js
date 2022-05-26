let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];//true
let requiredRange2 = [100, 350]; //true
let requiredRange3 = [200, null]; //true
let requiredRange4 = [null, null]; //false
let requiredRange5 = ['200', null]; //true
let requiredRange6 = ['200x', null]; //false
let requiredRange7 = [200, 'xx' ]; //false
let requiredRange8 = ['', '']; //false
let requiredRange9 = [0, '0']; //false
let requiredRange10 = [-10, 100]; //false
let requiredRange11 = [300]; //false
let requiredRange12 = '300, 100'; //false

//функция фильтрации массива по цене, принимает массив, данные по которым необходимо отфильтровать -
//- обязательно массив из 2-х элементов

function filterArr(arr, range) {

    //проверка входящих данных
    if(range[0] == 0 && range[1] == 0){
        return 'data incorrect '
    }

    if(
        range[0] === null
        || 
        range[0] === '' 
        && 
        range[1] === null 
        || 
        range[1] === '' 
        ){
        return 'data incorrect 1'
    }

    if(range[0] != null && !isFinite(range[0]) ){
        
        return 'data incorrect 2'
    }

    if(range[1] != null && !isFinite(range[1]) ){
        return 'data incorrect 2'
    }

    if(range[0] < 0 || range[1] < 0){
        return 'data incorrect 3 '
    }

    if(range.length <= 1){
        return 'data incorrect 4 '
    }

    if(!Array.isArray(range)){
        return 'data incorrect 5 '
    }

    //фильтрация массива
    let res = arr.filter(corse => {

        if(
            corse.prices[0] === null 
            && 
            corse.prices[1] === null
            ){
                return ''
        }
            
        if (
            range[0] === null 
            && 
            range[1] !== null 
            && 
            range[1] > 0
            ) {
            
                if(
                    corse.prices[0] <= range[1] 
                    && 
                    corse.prices[1] <= range[1]
                    ){
                    return corse
                }
            
        }

        if (
            range[0] !== null 
            && 
            range[1] !== null 
            && 
            range[1] >= range[0]
            ) {
            
            if(
                corse.prices[0] >= range[0] 
                &&
                corse.prices[0] <= range[1]
                && 
                corse.prices[1] <= range[1]
                ){
                return corse
            }
        
        }

        if (
            range[0] !== null 
            && 
            range[1] === null 
            && 
            range[0] > 0
            ) {
            
            if(
                corse.prices[0] <= range[0] 
                &&
                corse.prices[1] <= range[0]
                
                ){
                return corse
            }
        
        }

    })
    
    return res
}

console.log(filterArr(courses, requiredRange12));


//функция сортировки массива
function sortArr(arr){

    // глубокое копирование массива
   let temp = JSON.parse(JSON.stringify(arr))

   //меняем порядок элементов в массивах prices для удобства сортировки
   temp.forEach(el => {
       let point 
       let x
       if(el.prices[1] >= el.prices[0]){
           point = el.prices[1]
           x = el.prices[0]
       }else{
            point = el.prices[0]
            x = el.prices[1] 
       }
       el.prices[0] = point
       el.prices[1] = x
   });

   //сортируем массив
   temp.sort((a, b)=> a.prices[0] > b.prices[0] ? 1:-1 )

  return temp

}

console.log(sortArr(courses));




