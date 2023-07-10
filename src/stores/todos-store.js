import {makeAutoObservable} from 'mobx'

class TodosStore {
    todos = [];
    inputValue = ''

    constructor() {
        makeAutoObservable(this)
    }

    setInputValue = (value) => {
        this.inputValue = value
    }


    addTodo = (value) => {
        if (!value.todo || value.todo === '') return
        this.todos = [value, ...this.todos]
    }

    removeTodo = (value) => {
        this.todos = this.todos.filter((el) => {
            return el.id !== value.id
        })
    }

    completeTodo = (value) => {
        this.todos.map((el, i) => {
            if (el.id === value.id) {
                if (!value.complete) {
                    this.todos = this.todos.toSpliced(i, 1)
                    this.todos = [...this.todos, {...value, complete: true}]
                } else {
                    el.complete = false
                }
            }
            return el
        })
    }

    removeFirst = () => {
        this.todos = this.todos.toSpliced(0, 1)
    }

    removeLast = () => {
        this.todos = this.todos.toSpliced(this.todos.length - 1, 1)
    }

    isEven = () => {
        this.todos.map((e, i) => {
            if (i % 2) {
                return e.isEven = true
            } else {
                return e.isEven = false
            }
        })
    }

    backgroundChangeEven = () => {
        this.todos.map((e) => {
            if (e.isEven && !e.colorized) {
                return e.colorized = true
            } else {
                return e.colorized = false
            }
        })
    }

    backgroundChangeOdd = () => {
        this.todos.map((e) => {
            if (!e.isEven && !e.colorized) {
                return e.colorized = true
            } else {
                return e.colorized = false
            }
        })
    }

}


export default new TodosStore();
