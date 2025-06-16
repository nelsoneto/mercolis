// src/types/list.ts

/**
 * Representa um único item dentro de uma lista de compras.
 */
export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  checked: boolean;
}

/**
 * Representa a estrutura completa de uma lista de compras.
 */
export interface ShoppingList {
  id: string;         // ID do documento no Firestore
  name: string;       // Ex: "Compras da Semana", "Churrasco"
  ownerId: string;    // ID do usuário que criou a lista
  createdAt: Date;    // Data de criação
  items: ShoppingListItem[]; // Um array com os itens da lista
}