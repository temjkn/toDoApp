
import React from 'react';
import { connect } from 'react-redux';
import {addEventActionCreator, removeEventActionCreator} from '../redux/todoListReduser/todoListReduser';
import Form from './form/Form';
import ListGroup from './listGroup/ListGroup';

let mapStateToProps = (state) => ({
    todoList: state.todoList.todoList
});

class TodoList extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            value: '',
            empty : false
		};
	}
    inputChange = (text) => {
        this.setState({empty:false})
        this.setState({value:text});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.value.trim().length > 0){
            this.props.addEventActionCreator(this.state.value);
            this.setState({value:''})
        }else{
            this.setState({empty:true})
        }
    }
    render() {
        return (
            <div>
                <h2>TodoList</h2>
                <Form 
                    onSubmit = {this.onSubmit}
                    value = {this.state.value}
                    empty = {this.state.empty}
                    inputChange = {this.inputChange}
                />
                <ListGroup list = {this.props.todoList} removeEvent= {this.props.removeEventActionCreator}/>
            </div>
        );
    }
}

export default connect(mapStateToProps,{addEventActionCreator, removeEventActionCreator})(TodoList);