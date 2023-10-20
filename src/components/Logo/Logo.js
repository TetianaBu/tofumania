import styles from "./Logo.module.css";
import logoIcon from "../../../public/logo.svg";

function Logo() {
  return <div className={styles.logoWrapper}>{logoIcon}</div>;
}
export default Logo;
