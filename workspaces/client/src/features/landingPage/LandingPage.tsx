import reactLogo from './assets/react.svg'
import './App.css'
import { landingPageActions, landingPageSelectors } from './landingPageSlice'
import { useAppDispatch, useAppSelector } from '../../library/store';

function LandingPage() {

  const count = useAppSelector(landingPageSelectors.count);
  const dispatch = useAppDispatch();

  const onClickCount = () => {
    dispatch(landingPageActions.increment());
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Express</h1>
      <div className="card">
        <button onClick={onClickCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default LandingPage
