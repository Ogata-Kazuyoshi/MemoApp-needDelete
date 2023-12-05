import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../App';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { changeToStringDate } from '../../controllers/controller';
import dbApi from '../../api/dbHandling';

const Nav = (props) => {
  const { memos, setMemos, currentId, setCurrentId } = props;

  const titleGet = (str) => {
    if (str.includes('\n')) {
      const splitString = str.split('\n')[0];
      if (splitString.length <= 25) {
        return splitString;
      } else {
        return splitString.slice(0, 25);
      }
    } else {
      if (str.length <= 25) {
        return str;
      } else {
        return str.slice(0, 25);
      }
    }
  };
  const selectCard = (id) => {
    console.log('selected : ', id);
    setCurrentId(id);
  };
  const addHandler = async () => {
    const currentTime = new Date();
    const changeDate = changeToStringDate(currentTime);
    const sendData = {
      create_date: changeDate,
      update_date: changeDate,
      content: '',
    };
    const username = 'testUser';
    const res = await dbApi.createCard(username, sendData);
    const resAll = await dbApi.getDB();
    setMemos(resAll.data);
    setCurrentId(res.data.id);
    console.log('changeTime', changeDate);
    console.log('res : ', res);
  };
  return (
    <div className="personal__component">
      <div className="personal__nav">
        <div className="personal__nav--top">Nav</div>
        <AddBoxIcon onClick={addHandler} />
        {memos.map((elm) => {
          return (
            <div
              key={elm.id}
              className="card__container"
              onClick={() => {
                selectCard(elm.id);
              }}
              style={{
                border: elm.id === currentId ? '2px solid black' : 'none',
              }}
            >
              <div className="card__title">
                <div>{titleGet(elm.content)}</div>
              </div>
              <div className="card__date">
                <div>{elm.update_date}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
