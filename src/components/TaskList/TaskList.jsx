import {EmptyTaskList} from "../EmpyTaskList/EmptyTaskList";
import {TaskItem} from "../TaskItem/TaskItem";
import {observer} from "mobx-react-lite";
import TodosStore from "../../stores/todos-store";


export const TaskList = observer(() => {
    const {todos} = TodosStore
    return (
        <div className="card mb-4">
            <ul className="list-group list-group-flush">
                {todos.length === 0 ? <EmptyTaskList /> : todos.map((el) => <TaskItem key={el.id} {...el} />)}
            </ul>
        </div>
    )
})
