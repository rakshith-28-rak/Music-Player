/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define your custom font families
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'cursive': ['Dancing Script', 'cursive'],
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
