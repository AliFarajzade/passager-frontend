module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                lightGreenAlpha: '#7dd46e',
                lightGreen: '#7ed56f',
                darkGreen: '#28b485',
                darkGreenAlpha: '#28b484',
            },
        },
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        styled: true,
        themes: [
            {
                emerald: {
                    primary: '#7ed56f',

                    secondary: '#377CFB',

                    accent: '#EA5234',

                    neutral: '#333C4D',

                    'base-100': '#FFFFFF',

                    info: '#3ABFF8',

                    success: '#36D399',

                    warning: '#FBBD23',

                    error: '#F87272',
                },
            },
            'dark',
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: 'dark',
    },
}
