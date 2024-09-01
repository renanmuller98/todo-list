import { CounterTask } from "../../components/CounterTask/CounterTask"
import { Logo } from "../../components/Logo/Logo"
import { SearchTasks } from "../../components/searchTasks/SearchTasks"
import { Tasks } from "../../components/Tasks/Tasks"
//import { Task } from "../../components/Task/Task"

export const Home = () => {
    return(
        <div className="container">
            <Logo/>
            <SearchTasks/>
            <CounterTask/>
            <Tasks/>
        </div>
    )
}