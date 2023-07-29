//FUNCIONES
function createProduct (title: string, stock: number){
  return {
    title,
    stock
  }
}
createProduct('plato', 45)

const createProductV2 = (title: string, stock?: number) => {
  return {
    title,
    stock
  }
}
