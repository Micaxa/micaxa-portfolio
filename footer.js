function Footer() {

  const { dark } = React.useContext(ThemeContext);

  return (
    <footer className="footer">

      <h3>Micaxa</h3>

      <p>Built with clean UI and modern design.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>

      <p>© {new Date().getFullYear()}</p>

    </footer>
  );
}