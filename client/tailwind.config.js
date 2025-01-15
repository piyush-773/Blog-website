// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin'),
//     require('tailwind-scrollbar'),
//   ],
// };

/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite, scrollbar],
};
