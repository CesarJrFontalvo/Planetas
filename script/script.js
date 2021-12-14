let nombrePlanetas = Array ('Tierra', 'Marte', 'Jupiter')
let distancia = [5,3,'67']
const tamaño = [20,10,200]


let i=0;
while (i <= nombrePlanetas.length - 1 ) {
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i +1
}

// for (let index = 0; index < nombrePlanetas.length; index++) {
//     console.log(nombrePlanetas[index]);
    
// }

for (const key in nombrePlanetas) {
    console.log(nombrePlanetas[key]);
}

for(const planeta of nombrePlanetas){
    console.log(planeta);
}

for (const [key] in distancia) {
    if (distancia[key]== '5') {
        console.log('Se encontró la distancia')
    } else {
        console.log('No se encontró la distancia')
          
    }
}

nombrePlanetas.forEach((value,index,array) =>{
    console.log('planeta', index, value)
});

nombrePlanetas.map((planeta,index)=>{
    return(
        console.log(`El planeta ${planeta} tiene un tamaño de :${tamaño[index]}`)
    )
});

let resultadoMap = nombrePlanetas.map((planetas,index)=>{
    return(`El planeta ${planetas} tiene un tamaño de :${tamaño[index]}`)
});
console.log(resultadoMap);