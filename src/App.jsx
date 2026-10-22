import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="app">
      <div className="light-card">
        <header className="header">
          <div className="brand">
            <span className="home-icon">⌂</span>
            <h2>Lumina</h2>
          </div>

          <div className="active-badge">
            <span className="active-dot"></span>
            Smart Home
          </div>
        </header>

        <section className="intro">
          <p className="eyebrow">YOUR SMART SPACE</p>
          <h1>Smart Light</h1>
          <p className="subtitle">
            A little light makes a big difference.
          </p>
        </section>

        <section className="bulb-section">
          <div className={`bulb-container ${isOn ? "on" : "off"}`}>
            <div className="bulb-glow"></div>

            <svg
              className="bulb"
              viewBox="0 0 120 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 10 C29 10 12 33 12 58 C12 78 25 91 37 107 L42 121 H78 L83 107 C95 91 108 78 108 58 C108 33 91 10 60 10Z"
                fill={isOn ? "#FFD76A" : "#252D40"}
                stroke={isOn ? "#FFE9A7" : "#69748D"}
                strokeWidth="3"
              />

              <path
                d="M42 121 H78 M43 130 H77 M46 139 H74"
                stroke={isOn ? "#FFD76A" : "#8791A8"}
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M48 121 V85 Q48 76 40 76 Q32 76 36 84 Q40 89 60 89 Q80 89 84 84 Q88 76 80 76 Q72 76 72 85 V121"
                fill="none"
                stroke={isOn ? "#FFF5D0" : "#7E899F"}
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M48 145 H72 Q69 154 60 154 Q51 154 48 145Z"
                fill="#30394D"
              />
            </svg>
          </div>

          <div className={`light-status ${isOn ? "status-on" : ""}`}>
            <span className="status-icon">
              {isOn ? "☀" : "◐"}
            </span>
            {isOn ? "Light is ON" : "Light is OFF"}
          </div>
        </section>

        <section className="control-panel">
          <div className="room-icon">
            {isOn ? "☼" : "◌"}
          </div>

          <div className="room-info">
            <h3>Living Room</h3>
            <p>Smart lighting</p>
          </div>

          <button
            type="button"
            className={`toggle ${isOn ? "toggle-on" : ""}`}
            onClick={() => setIsOn((previous) => !previous)}
            aria-label={isOn ? "Turn light off" : "Turn light on"}
            aria-pressed={isOn}
          >
            <span className="toggle-knob"></span>
          </button>
        </section>

        <footer className="footer">
          <span
            className={`power-dot ${isOn ? "power-active" : ""}`}
          ></span>
          <span>SMART LIGHT</span>
          <span className="footer-right">LUMINA · 01</span>
        </footer>
      </div>
    </div>
  );
}

export default App;