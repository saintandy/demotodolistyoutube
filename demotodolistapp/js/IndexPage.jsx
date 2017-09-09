import {UI, StyleSheet, styleRule, registerStyle} from "UI";
import {FAIcon} from "FontAwesome";

class TodoStyle extends StyleSheet {
    @styleRule
    todo = {
        listStyle: "decimal",
        ":hover": {
            backgroundColor: "#eee",
        },
    };

    @styleRule
    uncheckedTodo = {

    };

    @styleRule
    checkedTodo = {
        textDecoration: "line-through",
    };
}

@registerStyle(TodoStyle)
class Todo extends UI.Primitive("li") {
    extraNodeAttributes(attr) {
        attr.addClass(this.styleSheet.todo);
    }

    render() {
        const {message, checked} = this.options;
        let divClassName = this.styleSheet.uncheckedTodo;
        if (checked) {
            divClassName = this.styleSheet.checkedTodo;
        }
        
        return <div className={divClassName}>
            {
                checked ? <FAIcon icon="check-circle-o" /> : null
            }
            {message}
        </div>;
    }

    toggleTodo() {
        this.updateOptions({
            checked: !this.options.checked,
        });
    }

    onMount() {
        this.addClickListener(() => {
            this.toggleTodo();
        });
    }
}

class TodoList extends UI.Primitive("ul") {
    render() {
        const todoItems = [
            {
                message: "test 1",
                checked: false,
            },
            {
                message: "test 2",
                checked: false,
            },
            {
                message: "test 3",
                checked: true,
            },
            {
                message: "test 4",
                checked: false,
            },
        ];
        let todos = [];

        for (let index = 0; index < todoItems.length; index += 1) {
            todos.push(
                <Todo message={todoItems[index].message} checked={todoItems[index].checked} />,
            );
        }

        return todos;
    }
}

export class IndexPage extends UI.Element {
    render() {
        return <TodoList />;
    }
}
