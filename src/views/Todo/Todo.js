import React from "react"
import TodoItem from './TodoItem'
import './Todo.scss'

class Todo extends React.Component {

    state = {
        arrJob: [
            { id: 1, nameJob: 'Doing homework' },
            { id: 2, nameJob: 'Study' },
            { id: 3, nameJob: 'Relax with music' }
        ],
        inputValue: '',
        jobCurrent: {}
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleAdd = () => {
        const newJob = {
            id: Math.floor(Math.random() * 100000),
            nameJob: this.state.inputValue
        }
        this.setState({
            arrJob: [...this.state.arrJob, newJob],
            inputValue: ''
        })
    }

    handleDelete = (id) => {
        const currentArrJob = this.state.arrJob.filter(item => item.id !== id)
        this.setState({
            arrJob: currentArrJob
        })
    }

    handleEdit = (job) => {
        console.log(job);
        this.setState({
            jobCurrent: job
        })
    }

    render() {
        return (

            <div className="container">
                <div className="form-group">
                    <input
                        type="text" placeholder="Input todo"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button className="btn btn-primary"
                        onClick={this.handleAdd}
                    >
                        Add
                    </button>
                </div>
                <div className="todo-container">
                    <TodoItem
                        arrJob={this.state.arrJob}
                        deleteJob={this.handleDelete}
                        editJob={this.handleEdit}
                        jobCurrent={this.state.jobCurrent}
                    />
                </div>

            </div>
        )
    }
}

export default Todo