import { Children } from "react";
import { ReactNode } from "react";

// Define the types for the component's props
type CardProps = {
  classes: Classes;
  children?: ReactNode; // Define children prop as optional
};

type Classes = {
  name: string;
};

// Functional component with props
export default function Card({ classes, children }: CardProps) {
  return <div className={classes.name}>{children}</div>;
}
