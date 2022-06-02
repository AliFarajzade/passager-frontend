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
        themes: ['emerald', 'dark'],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: 'dark',
    },
}
