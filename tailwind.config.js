
// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: [
// 	  "./index.html",
// 	  "./src/**/*.{js,ts,jsx,tsx}",
// 	],
// 	theme: {
// 	  extend: {},
// 	},
//   }
// tailwind.config.js

// module.exports = {
//     content: [
//         "./src/**/*.{html,js,jsx,ts,tsx}",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 'custom-gray': '#d1d5db', // You can define custom colors
//             },
//         },
//     },
//     plugins: [
//         require('tailwind-scrollbar'),
//     ],
// }

import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#d1d5db', // Add your custom colors
      },
    },
  },
  plugins: [
   
    require('tailwind-scrollbar'),
  ],
}

export default keepTheme(config);

