import React, {Component} from 'react';
import './TodoApp.css';
import TodoList from "../TodoList/TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import {Redirect} from "react-router-dom";


export default class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="App">
                {
                    !this.props.isLoggedIn
                        ? <Redirect to='/'  />
                        : <>
                            <form onSubmit={this.handleSubmit} className="todo-form" noValidate>
                                <h3>New TODO</h3>
                                <TextField id="text"
                                           helperText="What needs to be done?"
                                           onChange={this.handleTextChange}
                                           value={this.state.text}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id="priority"
                                    type="number"
                                    helperText="Priority"
                                    onChange={this.handlePriorityChange}
                                    value={this.state.priority}/>
                                <br/>
                                <br/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="due-date"
                                        label="Date picker inline"
                                        value={this.state.dueDate}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <br/>
                                <br/>
                                <br/>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='large'
                                    startIcon={<SaveIcon/>}>
                                    Add #{this.state.items.length + 1}
                                </Button>
                            </form>
                            <br/>
                            <br/>
                            <TodoList todoList={this.state.items}/>
                        </>

                }


            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: new Date()
        }));
    }

}
