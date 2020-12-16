import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import DrapDrop from './components/drap-drop';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import TodoListHooks from './components/TodoListHooks';
import { TodoState } from './hookReduser/TodoState';

function App() {
	return (
	<div className='mb-5'>
        <TodoState>
			<BrowserRouter>
				<NavBar/>
				<div className='container mt-2'>
					<Route path="/todolist" render={()=>
						<TodoList/>
					}/>
					<Route path="/todoListHooks"  render={()=>
						<TodoListHooks/>
					}/>
					<Route path="/drap-drop" exact render={()=>
						<DrapDrop/>
					}/>
					<Redirect from='/' to='/drap-drop' />
				</div>
			</BrowserRouter>
		</TodoState>
	</div>
	);
}

export default App;
