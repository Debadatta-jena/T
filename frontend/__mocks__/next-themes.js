module.exports = {
  useTheme: () => ({ theme: 'light', setTheme: () => {} }),
  ThemeProvider: ({ children }) => children,
}
