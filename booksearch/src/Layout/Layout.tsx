import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import ButtonAppBar from "../components/UI/ButtonAppBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      {/* <MainNavigation /> */}
      <ButtonAppBar />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
