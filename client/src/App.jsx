import './App.css';
import dbApi from './api/dbHandling';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/personal/Nav';
import Memo from './components/personal/Memo';
import { useEffect, useState } from 'react';

function App() {
  const [memos, setMemos] = useState([]);
  const [currentId, setCurrentId] = useState(null);
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
  useEffect(() => {
    const getCurrent = async () => {
      const res = await dbApi.getDB();
      console.log('res : ', res.data);
      setMemos(res.data);
    };
    getCurrent();
  }, []);

  return (
    <>
      {/* <div>
        <button onClick={clickHandle}>gettest</button>
      </div>
      <div>
        <button onClick={postHandle}>postest</button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              path="/personal"
              element={
                <Nav
                  memos={memos}
                  setMemos={setMemos}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              }
            >
              <Route
                path="/personal/memo"
                element={
                  <Memo
                    memos={memos}
                    setMemos={setMemos}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                  />
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
