import { collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore"

import { db } from "../assets/firebase-config"

export const createProduct = async (productData) => {
	return await addDoc(collection(db, "product"), productData)
}

export const getProducts = async (uid, setFunction) => {
	const list = []
	await getDocs(query(collection(db, "product"), where("user", "==", uid))).then((q) => {
		q.forEach((product) => {
			const fullObject = {
				name: product.data().name,
				price: product.data().price,
				shop: product.data().shop,
				category: product.data().category,
				measurement: product.data().measurement,
				user: uid,
				id: product.id
			}
			list.push(fullObject)
		})
		setFunction(list)
	})
} 

export const updteProduct = async (id, data) => {
	await updateDoc(doc(db, "product", id), data)
}