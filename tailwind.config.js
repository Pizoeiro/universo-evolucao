/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais do tema espacial
        space: {
          dark: '#0B0B1E',     // Azul escuro profundo para background
          light: '#1A1B4B',    // Azul mais claro para elementos secundários
          accent: '#4B1BA6',   // Roxo para destaques
          star: '#FFD700',     // Dourado para estrelas e elementos especiais
          nebula: '#FF69B4',   // Rosa para elementos de nebulosa
          galaxy: '#4B0082',   // Índigo para elementos galáticos
        },
        // Cores para os elementos do jogo
        game: {
          dark: '#0a0a2e',
          primary: '#4a90e2',
          secondary: '#9b59b6',
          accent: '#f1c40f',
          light: '#f9f9f9',
          success: '#32CD32',  // Verde para feedback positivo
          danger: '#FF4500',   // Vermelho-laranja para feedback negativo
          warning: '#FFD700',  // Amarelo para alertas
        }
      },
      fontFamily: {
        game: ['Space Grotesk', 'sans-serif'],
        title: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 30s ease-in-out infinite',
        'float-reverse': 'float-reverse 25s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'twinkle-slow': 'twinkle 6s ease-in-out infinite',
        'pulse-slower': 'pulse 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) translateX(20px) scale(1.1)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '50%': { transform: 'translateY(20px) translateX(-20px) scale(1.1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      backgroundImage: {
        'star-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        'nebula-gradient': 'linear-gradient(to right, rgba(75,27,166,0.4), rgba(255,105,180,0.4))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.space.star), 0 0 20px theme(colors.space.star)',
        'game': '0 0 15px rgba(0, 191, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
