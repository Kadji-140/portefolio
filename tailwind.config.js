export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { fond: 'var(--fond)', texte: 'var(--texte)', carte: 'var(--carte)', bord: 'var(--bord)', sec: 'var(--sec)', violet: '#7C3AED', cyan: '#06B6D4' },
    fontFamily: { titre: ['"Space Grotesk"', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
  } },
}
