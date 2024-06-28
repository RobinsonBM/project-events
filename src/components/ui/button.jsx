import Link from "next/link";
import classes from "./button.module.css";

const Button = ({ children, link, onCLick }) => {
  console.log("🚀 ~ Button ~ children:", children);
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
