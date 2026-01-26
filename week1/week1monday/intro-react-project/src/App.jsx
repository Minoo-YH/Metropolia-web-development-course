import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My React Website</h1>
        <p>Welcome to my first React project</p>
      </header>

      <main className="content">
        <h2>About This Project</h2>
        <p>
          This project was created to explore the structure of a React
          application and understand how components work.
        </p>

        <h2>What I Learned</h2>
        <ul>
          <li>Project structure (src, public, config files)</li>
          <li>Editing components in React</li>
          <li>Hot Reload in the browser</li>
        </ul>
      </main>

      <footer className="footer">
        <p>© 2026 | Created by Student</p>
      </footer>
    </div>
  );
}

export default App;
