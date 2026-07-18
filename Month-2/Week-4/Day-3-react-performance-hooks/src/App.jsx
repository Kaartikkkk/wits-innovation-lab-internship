import { useState, useCallback } from 'react'
import Counter from './components/Counter'
import ExpensiveCalculation from './components/ExpensiveCalculation'
import UserList from './components/UserList'
import './App.css'

function App() {
  // Callback & Memo Demo States
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState('')

  // useMemo Demo States
  const [calcNumber, setCalcNumber] = useState(5)
  const [unrelatedCount, setUnrelatedCount] = useState(0)

  // Memoized increment callback to demonstrate React.memo
  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">React Core</div>
        <h1>Performance Hooks Lab</h1>
        <p className="subtitle">
          Interactive playground demonstrating <code>React.memo</code>, <code>useCallback</code>, <code>useMemo</code>, and custom hooks.
        </p>
        <div className="console-alert">
          <span className="pulse-dot"></span>
          <span>Open your browser Console (F12) to watch execution and render logs in real-time!</span>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Section 1: React.memo & useCallback */}
        <section className="card demo-card">
          <div className="card-header">
            <span className="icon">⚡</span>
            <h2>React.memo & useCallback</h2>
          </div>
          <p className="card-desc">
            Prevents child component re-renders when parent state changes.
          </p>

          <div className="demo-interactive">
            <Counter count={count} increment={incrementCount} />

            <div className="control-group">
              <label htmlFor="text-input">Type here (unrelated state):</label>
              <input
                id="text-input"
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type to trigger parent render..."
              />
              <p className="status-text">
                Current text: <code>{textInput || '(empty)'}</code>
              </p>
            </div>
          </div>

          <div className="explanation-box">
            <h4>How it works:</h4>
            <p>
              The <strong>Counter</strong> component is wrapped in <code>React.memo</code>, and its <code>increment</code> prop is memoized using <code>useCallback</code>. 
              Typing in the text field changes parent state, but the Counter will <strong>not</strong> re-render. Check the console!
            </p>
          </div>
        </section>

        {/* Section 2: useMemo */}
        <section className="card demo-card">
          <div className="card-header">
            <span className="icon">⚙️</span>
            <h2>useMemo</h2>
          </div>
          <p className="card-desc">
            Caches the result of expensive calculations to avoid re-running them on every render.
          </p>

          <div className="demo-interactive">
            <ExpensiveCalculation number={calcNumber} />

            <div className="control-group-buttons">
              <div className="number-adjuster">
                <label>Adjust Calculation Input:</label>
                <div className="button-row">
                  <button onClick={() => setCalcNumber((prev) => Math.max(1, prev - 1))}>-</button>
                  <span className="num-display">{calcNumber}</span>
                  <button onClick={() => setCalcNumber((prev) => prev + 1)}>+</button>
                </div>
              </div>

              <div className="unrelated-trigger">
                <label>Trigger Render (Unrelated):</label>
                <button className="btn-secondary" onClick={() => setUnrelatedCount((prev) => prev + 1)}>
                  Render Count: {unrelatedCount}
                </button>
              </div>
            </div>
          </div>

          <div className="explanation-box">
            <h4>How it works:</h4>
            <p>
              The calculation runs 100,000,000 times! Because it is wrapped in <code>useMemo</code>, clicking "Render Count" does <strong>not</strong> trigger "Calculating Square..." in the console because the result is cached.
            </p>
          </div>
        </section>

        {/* Section 3: Custom useFetch Hook */}
        <section className="card user-list-card">
          <div className="card-header">
            <span className="icon">🌐</span>
            <h2>Custom Hook (useFetch)</h2>
          </div>
          <p className="card-desc">
            Reusable hook encapsulating API data fetching and loading states.
          </p>

          <div className="demo-interactive fetch-demo">
            <UserList />
          </div>

          <div className="explanation-box">
            <h4>How it works:</h4>
            <p>
              Encapsulates fetch logic inside <code>useFetch.js</code>, returning reactive <code>data</code> and <code>loading</code> states.
            </p>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built as a React Performance Optimization Showcase</p>
      </footer>
    </div>
  )
}

export default App
