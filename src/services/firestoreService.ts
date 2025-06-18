import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  Timestamp,
  orderBy,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { type ShoppingList, type ShoppingListItem } from '../types'

const listsCollectionRef = collection(db, 'shoppingLists')

/**
 * Função helper para processar um documento do Firestore, garantindo
 * que o campo 'createdAt' seja convertido corretamente para um objeto Date.
 * @param doc - O documento do Firestore.
 * @returns O objeto de lista processado.
 */
import { DocumentSnapshot } from 'firebase/firestore'

const processDoc = (doc: DocumentSnapshot): ShoppingList => {
  // Usa destructuring para separar o createdAt do resto dos dados.
  const { createdAt, ...restOfData } = doc.data() ?? {}

  return {
    id: doc.id,
    // Agora createdAt convertido nunca será sobrescrito.
    createdAt: createdAt instanceof Timestamp ? createdAt.toDate() : new Date(),
    ...restOfData,
  } as ShoppingList
}

/** Cria uma nova lista de compras no Firestore. **/
export const createShoppingList = (listName: string, userId: string) => {
  if (!listName.trim()) {
    return Promise.reject(new Error('O nome da lista não pode estar vazio.'))
  }
  return addDoc(listsCollectionRef, {
    name: listName,
    ownerId: userId,
    createdAt: Timestamp.now(),
    items: [],
  })
}

/** Ouve as listas de compras de um utilizador em tempo real. **/
export const listenToUserLists = (
  userId: string,
  callback: (lists: ShoppingList[]) => void,
) => {
  const q = query(
    listsCollectionRef,
    where('ownerId', '==', userId),
    orderBy('createdAt', 'desc'),
  )

  const unsubscribe = onSnapshot(
    q,
    (querySnapshot) => {
      // Usamos a nossa nova função helper para processar cada documento
      const lists = querySnapshot.docs.map(processDoc)
      callback(lists)
    },
    (error) => {
      console.error('Erro ao ouvir as listas de utilizador:', error)
    },
  )

  return unsubscribe
}

/** Ouve os detalhes de uma única lista em tempo real. **/
export const listenToListDetails = (
  listId: string,
  callback: (list: ShoppingList | null) => void,
) => {
  const docRef = doc(db, 'shoppingLists', listId)
  const unsubscribe = onSnapshot(
    docRef,
    (doc) => {
      if (doc.exists()) {
        // Usamos a mesma função helper aqui também para consistência
        callback(processDoc(doc))
      } else {
        callback(null)
      }
    },
    (error) => {
      console.error('Erro ao ouvir os detalhes da lista:', error)
    },
  )
  return unsubscribe
}

/** Atualiza o array de itens de uma lista de compras. */
export const updateShoppingListItems = (
  listId: string,
  items: ShoppingListItem[],
) => {
  const docRef = doc(db, 'shoppingLists', listId)
  return updateDoc(docRef, { items })
}
