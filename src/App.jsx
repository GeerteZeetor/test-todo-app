import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import TodosStore from "./stores/todos-store";
import {FormAddTodo} from "./components/FormAddTodo/FormAddTodo";
import {TaskList} from "./components/TaskList/TaskList";
import {GreyButton} from "./components/GreyButton/GreyButton";

const App = observer(() => {
    const {todos, removeFirst, removeLast, isEven, backgroundChangeEven, backgroundChangeOdd} = TodosStore
    useEffect(() => {
        isEven()
    }, [isEven, todos])

    return (
            <div className="container">
                <h1 className="display-4 mb-2">ToDo приложение</h1>
                <p className="h4 mb-5">список задач на сегодня</p>
                <TaskList />
                <FormAddTodo />
                <GreyButton onClick={removeFirst}>Удалить первую задачу</GreyButton>
                <GreyButton onClick={removeLast}>Удалить последнюю задачу</GreyButton>
                <GreyButton onClick={backgroundChangeEven} >Выделить все чётные</GreyButton>
                <GreyButton onClick={backgroundChangeOdd} >Выделить все нечётные</GreyButton>
            </div>
    );
})

export default App;
