import React, { useState } from "react";


const ToDoList = () => {
    const[items, setItems] = useState({
        todo: '',
        todolist: []
    })
    const { todo, todolist } = items

    const handleChange = (e) => {
        setItems({...items, todo: e.target.value
        });
    }

    const addToList = () => {
        if (todo.trim() !== '') {                   // makes sure empty value won't be added
            const list = [todo, ...todolist];       // add new list + copy old list
            setItems({
                ...items,
                todo: '',                           // clear input after adding
                todolist: list                      // replace todolist with the new list (pati ung bago naadd)
            });
        }
    }

    const handleDelete = (index) => { 
        const list = [...todolist]
        list.splice(index, 1)

        setItems({
            ...items,
            todolist: list
        })
    }

      
    return (
        <div className="todolist-main">
            <div className="content uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">To-Do-List</h3>
                
                <div className="uk-margin">
                    <div className="uk-flex uk-flex-column uk-flex-row@m uk-flex-middle">
                        <div className="uk-width-1-1 uk-width-expand@m">
                            <input 
                                className="uk-input" 
                                type="text" 
                                placeholder="What do you need to do today?" 
                                value={todo}
                                onChange={handleChange}
                            />
                        </div>
                        <button 
                            className="uk-button uk-button-primary uk-margin-small uk-margin-remove@m uk-width-1-1 uk-width-auto@m" onClick={addToList}>ADD</button>
                    </div>
                </div>

                {/* filter options */}
                <div className="uk-margin">
                    <ul className="uk-subnav uk-subnav-pill">
                        <li className="uk-active"><a href="/">All</a></li>
                        <li><a href="/">Pending</a></li>
                        <li><a href="/">Completed</a></li>
                    </ul>
                </div>
                
                {/* to do list */}
                {
                    todolist.length > 0 ? (
                        todolist.map((value, index) => (
                        <div className="uk-margin" key={index}>
                            <div className="uk-flex uk-flex-middle uk-flex-between uk-margin-small">
                                <div className="uk-flex uk-flex-middle">
                                    <input className="uk-checkbox" type="checkbox" />
                                    <span className="uk-margin-small-left">{value}</span>     
                                </div>
                                <a href="#" className="uk-text-danger" uk-icon="icon: close" onClick={() => handleDelete(index)}>X</a>
                            </div>
                        </div>
                        ))
                    ) : (
                        <span>No records found!</span>
                    )
                }

            </div>
        </div>
    )
}

export default ToDoList;