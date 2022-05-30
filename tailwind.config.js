module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                lightGreenAlpha: '#7dd46e',
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
