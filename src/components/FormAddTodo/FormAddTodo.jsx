import {observer} from "mobx-react-lite";
import TodosStore from "../../stores/todos-store";

export const FormAddTodo = observer(() => {

    const {inputValue, setInputValue, addTodo} = TodosStore

    const onClickHandler = (e) => {
        e.preventDefault()
        addTodo({
            todo: inputValue,
            complete: false,
            id: Date.parse(new Date()) * Math.random(),
            isEven: null,
            colorized: false
        })
        setInputValue('')
    }

    return (
        <div className="card bg-light">
            <div className="card-header">Добавить новую задачу</div>
            <div className="card-body">
                <form id="form">
                    <div className="form-group">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="form-control"
                            placeholder="Текст задачи"
                            required
                        />
                        <small
                            className="form-text text-muted"
                        >
                            Что делаем, сколько времени тратим, какой результат получаем.
                        </small>
                    </div>
                    <button type="submit" onClick={onClickHandler} className="btn btn-primary  btn-lg active">Добавить</button>
                </form>
            </div>
        </div>
    )
})
