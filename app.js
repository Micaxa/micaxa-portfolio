const ThemeContext = React.createContext();
function ThemeProvider({ children }) {

  const [dark, setDark] = React.useState(true);

  function toggleTheme() {
    setDark(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? "dark" : "light"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function App(){
  return(
    <div>
      <ThemeProvider>
        <Header /> 
        <Main / >
        <Footer />
      </ThemeProvider>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);