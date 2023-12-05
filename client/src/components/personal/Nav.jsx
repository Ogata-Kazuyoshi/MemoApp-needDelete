import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../App';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { changeToStringDate } from '../../controllers/controller';
import dbApi from '../../api/dbHandling';
import { titleGet } from '../../controllers/controller';

const Nav = (props) => {
  const {
    memos,
    setMemos,
    currentId,
    setCurrentId,
    nowTyping,
    setNowTyping,
    newMessage,
    setNewMessage,
  } = props;

  console.log('nw]owTyping : ', nowTyping);

  const selectCard = (id, content) => {
    console.log('selected : ', id);
    setNewMessage('');
    setNowTyping(content);
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

  const checkDiffTime = (date) => {
    const current = new Date();
    const updated = new Date(date);
    const diff = (current - updated) / 1000;
    return `${diff} s`;
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
                selectCard(elm.id, elm.content);
              }}
              style={{
                border: elm.id === currentId ? '2px solid black' : 'none',
              }}
            >
              <div className="card__title">
                <div>
                  {elm.id === currentId
                    ? titleGet(nowTyping)
                    : titleGet(elm.content)}
                </div>
              </div>
              <div className="card__date">
                <div>{checkDiffTime(elm.update_date)}</div>
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
