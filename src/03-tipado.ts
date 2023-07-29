//CASTEO DE DATOS
let myDynamicVar:any
let hola = (<number>myDynamicVar)


//TIPADO
type Sizes = 'S' | 'M' | 'L' | 5//tipado personalizado
type Clothes = 'shirt' | 'jeans' | 'skirt'

function sale(size:Sizes, clothes:Clothes){
  console.log(`la talla de la prenda ${clothes} es ${size}`);
}

sale(5,'skirt');


//NULL AND UNDEFINED
function hiV2 (name: string | null) {
  let hello = 'Hola'
  hello += name?.toLowerCase() ?? 'nobody';//IF ABREVIADO
}
hiV2('Angie');

