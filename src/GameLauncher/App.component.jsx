import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.component";

export default function GameLauncher() {
  return (
    <div className={styles.body}>
      <Nav />
      <div className={styles.MainContainer}>
        <Outlet />
      </div>
    </div>
  );
}