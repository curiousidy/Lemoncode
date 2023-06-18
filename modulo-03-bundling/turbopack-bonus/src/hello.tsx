import { FC } from "react";
import classes from "./mystyles.module.scss";

export const HelloComponent: FC = () => {
  console.log(import.meta.env.VITE_API_BASE);
  return <h2 className={classes["red-background"]} >Hello from React</h2>;
};