// Haciendo esto, me carga el Firestore pero no el html al hosting
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})



// Haciendo esto, me carga el html al hosting, pero no me carga el Firestore: 
/* eslint-disable no-undef */
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': process.env,
//   },
// })

