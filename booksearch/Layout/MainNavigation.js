import styles from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import authContext from "../store/auth-context";

const loginNavigationMenus = [
  { id: "m1", name: "내 정보", href: "/" },
  { id: "m2", name: "인기 검색어", href: "/popular" },
];

const logoutNavigationMenus = [
  { id: "m1", name: "로그인", href: "/login" },
  { id: "m2", name: "회원가입", href: "/signup" },
];

function MainNavigation() {
  const router = useRouter();
  const ctx = useContext(authContext);

  const onClickLogo = () => {
    router.push("/");
  };

  let menus = ctx.isLoggedIn ? loginNavigationMenus : logoutNavigationMenus;
  console.log(router.pathname);
  return (
    <header className={styles.header}>
      <div onClick={onClickLogo} className={styles.logo}>
        책
      </div>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.href}>
                <a
                  className={router.pathname === menu.href ? styles.active : ""}
                >
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
