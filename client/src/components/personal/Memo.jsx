import React, { useEffect, useState } from 'react';

const Memo = (props) => {
  const { memos, setMemos, currentId, setCurrentId } = props;
  const [newMessage, setNewMessage] = useState('');
  console.log('currentID : ', currentId);

  useEffect(() => {
    setNewMessage('');
  }, [currentId]);

  let index = 0;
  if (currentId !== null) {
    index = memos.findIndex((elm) => elm.id === currentId);
    // setNewMessage(memos[index].content);
    console.log(memos[index].content);
  }
  const changeHandler = (e) => {
    setNewMessage(e.target.value);
  };
  return (
    <div className="personal__memo">
      <div className="personal__memo--top">Delete</div>
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
