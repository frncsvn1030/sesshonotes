import React from "react";

const ToDoList = () => {
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
                                aria-label="Input"
                            />
                        </div>
                        <button className="uk-button uk-button-primary uk-margin-small uk-margin-remove@m uk-width-1-1 uk-width-auto@m">ADD</button>
                    </div>
                </div>

                {/* Filter options */}
                <div className="uk-margin">
                    <ul className="uk-subnav uk-subnav-pill">
                        <li className="uk-active"><a href="#">All</a></li>
                        <li><a href="#">Pending</a></li>
                        <li><a href="#">Completed</a></li>
                    </ul>
                </div>

                {/* Todo list items */}
                <div className="uk-margin">
                    <div className="uk-flex uk-flex-middle uk-flex-between uk-margin-small">
                        <div className="uk-flex uk-flex-middle">
                            <input className="uk-checkbox" type="checkbox" />
                            <span className="uk-margin-small-left">Do my project</span>     
                        </div>
                        <a href="#" className="uk-text-danger" uk-icon="icon: close">X</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;