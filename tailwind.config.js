/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#f4f4ff',
        customMediumBlue:"rgb(45, 72, 221)", // Define your custom color here
        customGray: '#6B7280',
      },
      screens: {
        xs: '340px', // Extra small devices
        sm: '480px', // Small devices
        md: '768px', // Medium devices
        lg: '955px', // Large devices
        xl: '1206px', // Extra large devices
        "2xl": '1536px', // 2XL devices
      },
      width: {
        customSmall: '222px', // Custom width 222px
        customLarge: '736px', // Custom width 736px
      },
    },
  },
  plugins: [],
}
