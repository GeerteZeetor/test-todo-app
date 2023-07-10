import leaf from "../../img/leaf.svg";
import styles from './EmptyTaskList.module.css'


export const EmptyTaskList = () => {

    return (
        <li id="emptyList" className={styles.emptyList}>
            <img src={leaf} alt="Empty" width="48" className="mt-3"/>
            <div className={styles.title}>Список дел пуст</div>
        </li>
    )
}
