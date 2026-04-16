function Header() {

  const { dark, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className="header">

      <h1 className="logo">Micaxa</h1>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>

        <button className="theme-btn" onClick={toggleTheme}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

    </header>
  );
}