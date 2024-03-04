import { TasksProvider } from "../todo/TasksContext";
import { WeatherProvider } from "../weather/WeatherContext";
import Card from "../../components/Card/Card";
import TaskList from "../todo/TaskList/TaskList";
import CurrentWeather from "../weather/CurrentWeather";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.homeLayout}>
            <Card>
                <header>
                    <h1>Incompleted Tasks</h1>
                </header>
                <TasksProvider>
                    <TaskList taskStatus='incompleted'/>
                </TasksProvider>
            </Card>
            <Card>
                <WeatherProvider>
                    <CurrentWeather showAdditionalDetails={false}/>
                </WeatherProvider>
            </Card>
        </div>
    );
}