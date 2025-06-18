import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useAuth } from '../hooks/useAuth'
import { ThemeToggleButton } from '../components/ui/ThemeToggleButton'
import { Modal } from '../components/ui/Modal'
import {
  createShoppingList,
  listenToUserLists,
} from '../services/firestoreService'
import { type ShoppingList } from '../types'

const HomePage: React.FC = () => {
  const { currentUser } = useAuth()

  const [lists, setLists] = useState<ShoppingList[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newListName, setNewListName] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true)
      const unsubscribe = listenToUserLists(currentUser.uid, (fetchedLists) => {
        // AQUI ESTÁ A ALTERAÇÃO: Ordenamos as listas aqui.
        const sortedLists = fetchedLists.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        )
        setLists(sortedLists) // Guardamos a lista já ordenada
        setIsLoading(false)
      })
      return () => unsubscribe()
    }
  }, [currentUser])

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  const handleCreateList = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser) return
    try {
      await createShoppingList(newListName, currentUser.uid)
      setNewListName('')
      setIsModalOpen(false)
      setError(null)
    } catch (err) {
      setError('Ocorreu um erro ao criar a lista. Tente novamente.')
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 transition-colors duration-300 dark:bg-neutral-800 dark:text-neutral-200">
      <header className="border-border  bg-neutral-100 shadow-sm dark:border-neutral-400 dark:bg-neutral-800 dark:shadow-neutral-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-foreground text-xl font-bold">Mercolis</h1>
            <div className="flex items-center space-x-4">
              <ThemeToggleButton />
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-red-700"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-border rounded-lg  bg-neutral-100 p-8 shadow  dark:bg-neutral-300 dark:text-neutral-800">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-foreground text-2xl font-semibold">
                  Minhas Listas
                </h2>
                <p className="text-secondary-text mt-1">
                  Bem-vindo, {currentUser?.displayName || currentUser?.email}!
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-lg bg-neutral-700 px-4 py-2 font-semibold text-white shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              >
                Criar Nova Lista
              </button>
            </div>

            {isLoading ? (
              <p className="text-secondary-text text-center">
                A carregar listas...
              </p>
            ) : lists.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {lists.map((list) => (
                  <Link key={list.id} to={`/list/${list.id}`}>
                    <div className="border-border hover:border-primary cursor-pointer rounded-lg bg-neutral-200 p-4 shadow-sm transition-all hover:shadow-md">
                      <h3 className="text-foreground font-bold">{list.name}</h3>
                      <p className="text-secondary-text text-sm">
                        {list.items.length} itens
                      </p>
                      {/* pré-visualização dos itens na lista */}
                      <div className="border-border border-t pt-2">
                        {list.items.length > 0 ? (
                          <ul className="space-y-1">
                            {/* Pegar apenas os 3 primeiros itens */}
                            {list.items.slice(0, 3).map((item) => (
                              <li
                                key={item.id}
                                className={`text-secondary-text text-sm ${item.checked ? 'line-through' : ''
                                  }`}
                              >
                                - {item.name}
                              </li>
                            ))}
                            {/* Se houver mais de 3 itens, mostrar mensagem */}
                            {list.items.length > 3 && (
                              <li className="text-secondary-text text-xs italic">
                                ... e mais {list.items.length - 3}
                              </li>
                            )}
                          </ul>
                        ) : (
                          <p className="text-secondary-text text-sm italic">
                            Lista vazia
                          </p>
                        )}
                      </div>
                      <p className="text-secondary-text mt-2 text-xs">
                        Criada em:{' '}

                        {list.createdAt.toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-secondary-text text-center">
                Nenhuma lista de compras encontrada. Crie a sua primeira!
              </p>
            )}
          </div>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Criar Nova Lista"
      >
        <form onSubmit={handleCreateList}>
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Ex: Compras da Semana"
            className="border-border text-foreground focus:ring-primary w-full rounded-md border bg-neutral-100 p-2 focus:outline-none focus:ring-2 dark:text-neutral-800"
            required
            autoFocus
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="hover:bg-red-600s mr-2 rounded-md bg-red-400 px-4 py-2 font-semibold text-neutral-100 hover:bg-red-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-400 px-4 py-2 font-semibold text-neutral-100 shadow-md hover:bg-green-500"
            >
              Criar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default HomePage