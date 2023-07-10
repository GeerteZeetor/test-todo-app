import tick from "../../img/tick.svg";
import cross from "../../img/cross.svg";

import styles from './TaskItem.module.css'
import {observer} from "mobx-react-lite";
import TodosStore from "../../stores/todos-store";

export const TaskItem = observer((props) => {
    const { todo, complete, colorized } = props
    const { completeTodo, removeTodo } = TodosStore

    const onRemoveHandler = () => {
        removeTodo(props)
    }

    const onCompleteHandler = () => {
        completeTodo(props)
    }

    return (
        <li className={colorized ? styles.taskColor : styles.task}>
            <span className={!complete ? styles.taskTitle : styles.done}>{todo}</span>
            <div className={styles.buttons}>
                <button type="button" onClick={onCompleteHandler} className={styles.btnAction}>
                    <img src={tick} alt="Done" width="18" height="18"/>
                </button>
                <button type="button" onClick={onRemoveHandler} data-action="delete" className={styles.btnAction}>
                    <img src={cross} alt="Done" width="18" height="18"/>
                </button>
            </div>
        </li>
    )
})

// list-group-item d-flex justify-content-between task-item
