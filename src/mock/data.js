import {doc, getFirestore, collection, getDoc, getDocs, query, where} from "firebase/firestore"
import { useEffect, useState } from "react"

const listaProductos = [
   {
      id:'01',category:'vendidos', name: 'CUPHEAD', stock: 5, price: `$1500`, description: 'Cuphead es un juego de acción clásico estilo "dispara y corre" que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30.',img:'https://i.postimg.cc/BbNHDtsM/Cupheads.jpg'},

      {id:'02',category:'novedades', name: 'NEW WORLD', stock:10, price: `$2600`, description: 'Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino en la isla sobrenatural de Aetérnum.',img:'https://i.postimg.cc/wMJT8G4J/newWorld.jpg'}, 

      {id:'03',category:'free', name: 'VALORANT', stock:10, price: 'Free to Play', description: 'Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games.',img:'https://i.postimg.cc/B69TMcCP/valorant.jpg'},
]


export const getProducts = ()=>{
  // const itemRef = doc(db, "items", "")
   const db = getFirestore()

    return new Promise((resolve,reject)=>{
   const itemsCollection = collection(db, "items");
   const q = query(itemsCollection)
   getDocs(q).then((snapshot)=>{
      if(snapshot.size > 0){
         const items = snapshot.docs.map((doc)=>{
            return{
               id: doc.id,
               ...doc.data()
            }
         });
        resolve(items)
      }
   })
 },[])
 
}
export const getItem = (id)=>{
   return new Promise((resolve) => {   
   const db = getFirestore();
   const itemRef = doc(db, "items", id);
   getDoc(itemRef).then((snapshot)=>{
      if (snapshot.exists()){
         const data = snapshot.data();
         const item = {
            id: snapshot.id,
            ...data,
         }
         resolve(item)
      }
   })
}) 
}