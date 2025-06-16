import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import { type ShoppingList } from '../types/lsit';

const listsCollectionRef = collection(db, 'shoppingLists');

export const getShoppingLists = async (): Promise<ShoppingList[]> => {
    const data = await getDocs(listsCollectionRef);
    return data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as ShoppingList[];
}

export const createShoppingList = async (listName: string) => {
    await addDoc(listsCollectionRef, { name: listName, items: [] });
}
