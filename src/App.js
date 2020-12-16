import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
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
					<Route path="/todoListHooks" exact render={()=>
						<TodoListHooks/>
					}/>
				</div>
			</BrowserRouter>
		</TodoState>
	</div>
	);
}

export default App;
