import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import dbApi from './api/dbHandling';

function App() {
  const [count, setCount] = useState(0);
  const clickHandle = async () => {
    const res = await dbApi.getDB();
    console.log('res : ', res);
  };
  const postHandle = async () => {
    const sendData = {
      create_date: '2023-11-05 09:58:53',
      update_date: '2023-11-05 09:58:53',
      content: 'testReact',
    };
    const username = 'testUser';
    const res = await dbApi.postDB(username, sendData);
    console.log('res : ', res);
  };

  return (
    <>
      <div>
        <button onClick={clickHandle}>gettest</button>
      </div>
      <div>
        <button onClick={postHandle}>postest</button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
