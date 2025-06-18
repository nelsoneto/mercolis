import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  if (!isOpen) return null

  return (
    // Fundo backdrop
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-neutral-800 bg-opacity-50"
      onClick={onClose}
    >
      {/* Conteúdo do Modal */}
      <div
        className="border-border z-50 w-full max-w-md rounded-lg bg-neutral-200 p-6 text-neutral-800 shadow-xl "
        onClick={(e) => e.stopPropagation()} // Impede que o clique no modal o feche
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-foreground text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-2xl font-light text-neutral-800 hover:text-neutral-950"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}