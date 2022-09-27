import styles from "./MainNavigation.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import authContext from "../store/auth-context";

const loginNavigationMenus = [
  { id: "m1", name: "내 정보", href: "/mypage" },
  { id: "m2", name: "인기 검색어", href: "/popular" },
];

const logoutNavigationMenus = [
  { id: "m1", name: "로그인", href: "/login" },
  { id: "m2", name: "회원가입", href: "/signup" },
];

function MainNavigation() {
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  const onClickLogo = () => {
    navigate("/");
  };

  let menus = ctx.isLoggedIn ? loginNavigationMenus : logoutNavigationMenus;
  return (
    <header className={styles.header}>
      <div onClick={onClickLogo} className={styles.logo}>
        책
      </div>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.href}
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
