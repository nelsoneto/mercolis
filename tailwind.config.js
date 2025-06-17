export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nomes de cores para o tema CLARO
        'light-background': '#dce0e6',     // bg-light-background
        'light-surface': '#FFFFFF',        // bg-light-surface
        'light-foreground': '#1F2937',     // text-light-foreground
        'light-secondary-text': '#6B7280', // text-light-secondary-text
        'light-primary': '#567ebb',        // bg-light-primary
        'light-border': '#E5E7EB',         // border-light-border

        // Nomes de cores para o tema ESCURO
        'dark-background': '#2b2b2b',      // dark:bg-dark-background
        'dark-surface': '#404040',         // dark:bg-dark-surface
        'dark-foreground': '#F3F4F6',      // dark:text-dark-foreground
        'dark-secondary-text': '#606d80',  // dark:text-dark-secondary-text
        'dark-primary': '#6b6b6b',         // dark:bg-dark-primary
        'dark-border': '#808080',          // dark:border-dark-border
      }
    },
  },
  plugins: [],
}
