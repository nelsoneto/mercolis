import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  listenToListDetails,
  updateShoppingListItems,
} from '../../services/firestoreService'
import { type ShoppingList, type ShoppingListItem } from '../../types'

const ListDetailsPage: React.FC = () => {
  const { listId } = useParams<{ listId: string }>() // Obter o ID da lista da URL
  const [list, setList] = useState<ShoppingList | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [newItemName, setNewItemName] = useState('')

  useEffect(() => {
    if (!listId) return

    setIsLoading(true)
    const unsubscribe = listenToListDetails(listId, (fetchedList) => {
      setList(fetchedList)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [listId])

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newItemName.trim() || !listId || !list) return

    const newItem: ShoppingListItem = {
      id: new Date().getTime().toString(), // ID simples baseado no tempo
      name: newItemName.trim(),
      quantity: 1,
      checked: false,
    }

    const updatedItems = [...list.items, newItem]
    await updateShoppingListItems(listId, updatedItems)
    setNewItemName('')
  }

  const handleToggleItem = async (itemId: string) => {
    if (!listId || !list) return

    const updatedItems = list.items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item,
    )
    await updateShoppingListItems(listId, updatedItems)
  }

  const handleDeleteItem = async (itemId: string) => {
    if (!listId || !list) return

    const updatedItems = list.items.filter((item) => item.id !== itemId)
    await updateShoppingListItems(listId, updatedItems)
  }

  if (isLoading) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <p className="text-secondary-text">A carregar detalhes da lista...</p>
      </div>
    )
  }

  if (!list) {
    return (
      <div className="bg-background flex min-h-screen flex-col items-center justify-center">
        <p className="text-foreground text-xl">Lista não encontrada.</p>
        <Link
          to="/"
          className="bg-primary mt-4 rounded-md px-4 py-2 font-semibold text-white"
        >
          Voltar para as minhas listas
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen dark:bg-neutral-800 dark:text-neutral-100">
      {/* Header simples com o nome da lista */}
      <header className="border-border bg-surface p-4 shadow-sm dark:shadow-neutral-700">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link to="/" className="text-primary hover: text-sm font-semibold underline-offset-4 hover:underline">
            <span>&larr;</span> Voltar
          </Link>
          <h1 className="text-2xl font-bold">{list.name}</h1>
          <div />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="mx-auto max-w-4xl p-4 md:p-8">
        {/* Formulário para adicionar item */}
        <form onSubmit={handleAddItem} className="mb-8 flex gap-2">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Adicionar novo item (ex: Leite)"
            className="border-border focus:ring-primary grow rounded-md  bg-neutral-100 p-3 focus:outline-none focus:ring-2 dark:bg-neutral-700 dark:text-neutral-100"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-green-400 px-6 py-3 font-semibold hover:bg-green-500 dark:text-neutral-100"
          >
            Adicionar
          </button>
        </form>

        {/* Lista de itens */}
        <div className="space-y-3">
          {list.items.length > 0 ? (
            list.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg bg-neutral-200 p-4 shadow-sm dark:bg-neutral-700"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleToggleItem(item.id)}
                    className="border-border focus:ring-primary size-6 rounded text-neutral-800"
                    title={`Marcar ${item.name} como ${item.checked ? 'não comprado' : 'comprado'}`}
                  />

                  <span
                    className={`ml-4 text-lg ${item.checked ? 'text-secondary-text line-through' : ''
                      }`}
                  >
                    {item.name}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  {/* Lixeira */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-secondary-text pt-8 text-center">
              Esta lista está vazia. Adicione o seu primeiro item acima!
            </p>
          )}
        </div>
      </main>
    </div>
  )
}

export default ListDetailsPage