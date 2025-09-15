
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="logo">SC</div>
            <h1>SkillChain</h1>
          </div>
          <button className="login-btn">Log in</button>
        </div>
        <p className="subtitle">Micro skill exchange & learning network</p>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-left">
            <h2>Teach, Earn, Learn — with Skill Tokens</h2>
            <p>
              Share what you know and learn new real-life skills from others —
              no money required.
            </p>
            <div className="cta-row">
              <button className="btn primary">Join the exchange</button>
              <button className="btn outline">How it works</button>
            </div>

            <div className="how-row">
              <div className="how-card">
                <strong>Teach</strong>
                <div>Share skills you know well</div>
              </div>
              <div className="how-card">
                <strong>Earn</strong>
                <div>Get Skill Tokens for teaching</div>
              </div>
              <div className="how-card">
                <strong>Learn</strong>
                <div>Use tokens to learn new skills</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="card tokens">
              <div className="tokens-top">
                <div>Tokens</div>
                <div className="token-count">12</div>
              </div>
              <button className="btn small">Add Tokens</button>
            </div>
            <div className="illustration">[Illustration]</div>
          </div>
        </section>

        <section className="dashboard">
          <div className="card big">
            <h3>Tokens</h3>
            <div className="big-count">12</div>
            <button className="btn">Add Tokens</button>

            <div className="grid-2">
              <div>
                <h4>Skills</h4>
                <ul className="skills-list">
                  <li>
                    <strong>Video Editing</strong>
                    <div className="muted">2 skills earned</div>
                  </li>
                  <li>
                    <strong>French</strong>
                    <div className="muted">0 skills earned</div>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Find a skill</h4>
                <input className="search" placeholder="Search skill" />
                <div className="progress">
                  <div className="progress-bar" style={{ width: "60%" }}></div>
                </div>
                <div className="muted">3 skills learned</div>
              </div>
            </div>
          </div>

          <div className="card small">
            <h4>Progress</h4>
            <div className="progress-widget">
              <div className="muted">3 skills learned</div>
              <div>Keep going — you're doing great!</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>Made with ❤️ using React</div>
      </footer>
    </div>
  );
}
