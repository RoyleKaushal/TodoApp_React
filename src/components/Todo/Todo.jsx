import { useState } from "react";

function Todo({ todoData, finished, onFinish, onDelete, onEdit }) {
  const [isFinished, setIsFinished] = useState(finished);
  const [isEditting, setIsEditting] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div>
      <input
        type="checkbox"
        value={isFinished}
        onChange={(e) => {
          onFinish(!isFinished);
          setIsFinished(e.target.value);
        }}
      />
      {isEditting ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        todoData
      )}
      <button
        onClick={() => {
          if (editText.length < 1) return;
          setIsEditting(!isEditting);
          onEdit(editText);
        }}
      >
        {isEditting ? `Save` : `Edit`}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
