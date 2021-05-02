import react from 'react'
import Navigator from '../components/Navigator'
import TodoList from '../components/TodoList'

const FrontPage = () => {

    return (
        <div>
            <Navigator></Navigator>
            <div className="container">
                <h4 className="m-5 text-center">
                    List of TODO's
                </h4>
                <TodoList></TodoList>
            </div>
        </div>

    )
}

export default FrontPage