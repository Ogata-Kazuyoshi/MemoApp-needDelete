import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dbApi from '../../api/dbHandling';
import { titleGet, changeToStringDate } from '../../controllers/controller';

const Memo = (props) => {
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

  console.log('currentID : ', currentId);

  useEffect(() => {
    setNewMessage('');
  }, [currentId]);

  const deleteHandle = async () => {
    if (currentId === null) return;
    const res = await dbApi.deletCard(currentId);
    const resAll = await dbApi.getDB();
    setCurrentId(null);
    setMemos(resAll.data);
  };

  let index = 0;
  if (currentId !== null) {
    index = memos.findIndex((elm) => elm.id === currentId);
    // setNewMessage(memos[index].content);
    console.log(memos[index].content);
  }
  const changeHandler = (e) => {
    setNewMessage(e.target.value);
    setNowTyping(titleGet(e.target.value));
  };

  const updateHandler = async () => {
    const sendData = {
      update_date: changeToStringDate(new Date()),
      content: newMessage,
    };
    const res = await dbApi.updateCard(currentId, sendData);
    console.log('res : ', res);
    const getAll = await dbApi.getDB();
    setMemos(getAll.data);
  };
  return (
    <div className="personal__memo">
      <div className="personal__memo--top">
        <div>
          <DeleteForeverIcon onClick={deleteHandle} />
        </div>
        <button onClick={updateHandler}>編集完了する</button>
      </div>
      {currentId === null ? (
        <></>
      ) : (
        <div className="personal__memo--inputarea">
          <textarea
            type="text"
            value={newMessage || memos[index].content}
            onChange={changeHandler}
            className="persnal__memo--input"
          />
        </div>
      )}
    </div>
  );
};

export default Memo;
