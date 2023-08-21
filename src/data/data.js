import {doc, getFirestore, collection, getDoc, getDocs, query, } from "firebase/firestore"




export const getProducts = ()=>{
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