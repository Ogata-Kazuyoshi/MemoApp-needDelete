import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dbApi from '../../api/dbHandling';
import { titleGet } from '../../controllers/controller';

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
    setCurrentId(memos[0].id);
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
  return (
    <div className="personal__memo">
      <div className="personal__memo--top">
        <div>
          <DeleteForeverIcon onClick={deleteHandle} />
        </div>
        <button>編集</button>
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
