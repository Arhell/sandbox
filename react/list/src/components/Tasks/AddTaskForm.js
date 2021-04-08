import {useState} from 'react'
import axios from "axios";

import addIcon from '../../assets/img/add.svg'

const AddTaskForm = ({list, onAddTask}) => {
  const [visibleForm, setVisibleForm] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const toggleFormVisible = () => {
    setVisibleForm(!visibleForm)
    setInputValue('')
  }

  const addTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false
    }

    axios.post('http://localhost:3001/tasks', obj).then((data) => {
      onAddTask(list.id, data)
      toggleFormVisible()
    })
  }

  return (
    <div className="tasks__form">

      {!visibleForm
        ? (
          <div className="tasks__form-new" onClick={toggleFormVisible}>
            <img src={addIcon} alt="icon"/>
            <span>New task</span>
          </div>
        )

        : (
          <div className="tasks__form-block">
            <input
              value={inputValue}
              className="field"
              type="text"
              placeholder="Текст задачи"
              onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={addTask} className="button">Добавить задачу</button>
            <button className="button button--grey" onClick={toggleFormVisible}>Отмена</button>
          </div>
        )
      }
    </div>
  )
}

export default AddTaskForm