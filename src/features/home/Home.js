import { TasksProvider } from "../todo/TasksContext";
import Card from "../../components/Card/Card";
import TaskList from "../todo/TaskList/TaskList";
import Weather from "../weather/Weather";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.homeLayout}>
            <Card>
                <TasksProvider>
                    <TaskList taskStatus='incompleted'/>
                </TasksProvider>
            </Card>
            <Card>
                <Weather/>
            </Card>
        </div>
    );
}