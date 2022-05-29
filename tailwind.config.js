module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        styled: true,
        themes: [
            {
                lemonade: {
                    primary: '#a3e635',
                    secondary: '#E9E92F',
                    accent: '#F6F9C8',
                    neutral: '#191A3E',
                    'base-100': '#FFFFFF',
                    info: '#CAE2E8',
                    success: '#DFF2A1',
                    warning: '#F7E488',
                    error: '#F2B6B5',
                },
            },
            'forest',
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: 'forest',
    },
}
