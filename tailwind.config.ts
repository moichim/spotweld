import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const primaryColor = {
  50: "#fafaff",
  100: '#ded9f3',
  200: '#c8bbe8',
  300: '#ab85d1',
  400: '#933ba2',
  500: '#74166d',
  600: '#5d0c51',
  700: '#450639',
  800: '#2e0324',
  900: '#170111'
};


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        diagram: colors.pink,
        success: colors.lime,
        error: colors.red,
        muted: colors.gray
      },
      fontFamily: {
        sans: [ "Roboto", "Arial", "Helvetica", "sans-serif" ]
      },
      fontWeight: {
        normal: "300",
        medium: "500",
        bold: "700",
        black: "900"
      },
      maxWidth: {
        "8xl": "94rem"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
