module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-gradient':
          'linear-gradient(180deg, #FFDBBB 8.9%, rgba(204, 190, 177, 0.5) 70.97%);',
        'dashboard-gradient':
          'linear-gradient(180deg, rgba(255, 219, 187, 0.3) 8.9%, rgba(204, 190, 177, 0.1) 70.97%);',
      },
      boxShadow: {
        button:
          '0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.06)',
        input: '0px 0px 12px rgba(0, 0, 0, 0.05), 0px 0px 12px rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
