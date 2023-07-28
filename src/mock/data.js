const listaProductos = [
    {
       id:'01',category:'vendidos', name: 'CUPHEAD', stock: 5, price: `$1500`, description: 'Cuphead es un juego de acción clásico estilo "dispara y corre" que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30.',img:'https://i.postimg.cc/BbNHDtsM/Cupheads.jpg'},

       {id:'02',category:'novedades', name: 'NEW WORLD', stock:10, price: `$2600`, description: 'Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino en la isla sobrenatural de Aetérnum.',img:'https://i.postimg.cc/wMJT8G4J/newWorld.jpg'}, 

       {id:'03',category:'free', name: 'VALORANT', stock:10, price: 'Free to Play', description: 'Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games.',img:'https://i.postimg.cc/B69TMcCP/valorant.jpg'},
 ]
export const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
    let error = false
       setTimeout(()=>{
       if(error){
          reject('No hay Productos')
       }
       else{
          resolve(listaProductos)
       }
    },2000)
 })
 
}
export const getItem = (id)=>{
   return new Promise((resolve) => {
   resolve(listaProductos.find((item)=> item.id===id))
   })
}