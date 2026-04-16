function Main() {

  const texts = ["Mica", "a freelancer", "a website developer"];

  const [text, setText] = React.useState("");
  const [i, setI] = React.useState(0);
  const [j, setJ] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const { dark } = React.useContext(ThemeContext);
  
  React.useEffect(() => {

    const current = texts[i];

    const timeout = setTimeout(() => {

      if (!deleting) {
        setText(current.substring(0, j + 1));
        setJ(j + 1);

        if (j + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1000);
        }

      } else {
        setText(current.substring(0, j - 1));
        setJ(j - 1);

        if (j - 1 === 0) {
          setDeleting(false);
          setI((i + 1) % texts.length);
        }
      }

    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);

  }, [j, deleting, i]);

  return (
    <main>
      {/* HERO */}
      <section id="home" className="hero-section">

        <div className="hero-container">

          <div className="hero-image">
            <img src="/img/profile.png" />
          </div>

          <div className="hero-content">

            <p className="intro">Hi, I'm</p>

            <h1 className="name">
              {text}
              <span className="cursor">|</span>
            </h1>

            <p className="role">Freelancer • Website Developer</p>

            <p className="desc">
              I build clean, modern, and responsive websites.
            </p>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="about">

        <h2>About Me</h2>

        <p>
          I am a passionate developer focused on building clean UI,
          responsive layouts, and modern web experiences.
        </p>

        <div className="about-grid">

          <div className="card">Frontend</div>
          <div className="card">Backend</div>
          <div className="card">Tools</div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">

        <h2>My Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Hotel System</h3>
            <p>Booking management UI system.</p>
          </div>

          <div className="project-card">
            <h3>Todo App</h3>
            <p>Task management application.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio</h3>
            <p>Modern responsive portfolio.</p>
          </div>

        </div>

      </section>

    </main>
  );
}