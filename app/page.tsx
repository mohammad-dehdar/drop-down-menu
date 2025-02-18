import DropdownWrapper from "@/components/provider/DropDownMenuWrapper";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <div className={styles.page}>
      <DropdownWrapper/>
    </div>
  );
}