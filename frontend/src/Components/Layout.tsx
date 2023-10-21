import React, { useEffect, useState } from 'react';
import {
  DashboardOutlined,
  LinkOutlined,
  LogoutOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import styles from './Layout.module.scss';
import { Link, useLocation } from 'react-router-dom';

const navMenu = [
  { title: 'Short It!', to: '/shortit', icon: <LinkOutlined /> },
  { title: 'Dashboard', to: '/home', icon: <DashboardOutlined /> },
  { title: 'Subscription', to: '/subscription', icon: <MoneyCollectOutlined /> },
  { title: 'Sign Out', icon: <LogoutOutlined /> },
];

export default function Layout(props: { children: React.ReactChild }) {
  const [isActive, setIsActive] = useState(true);
  const { pathname: path } = useLocation();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1280) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    });
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={`${styles.navigation} ${isActive ? styles.active : ''}`}>
          <ul>
            <li className={styles.logo}>
              <img
                src="https://res.cloudinary.com/rylanzhou/image/upload/v1645317289/COMP%20539/539logo_2_x126ll.png"
                alt="logo"
              />
              <span>Short-It</span>
            </li>
            {navMenu.map((each) => (
              <li
                className={`${each.to && path.endsWith(each.to) ? styles.active : ''}`}
                key={each.title}
              >
                <Link to={`/dashboard${each.to}`}>
                  <span className={styles.icon}>{each.icon}</span>
                  <span className={styles.title}>{each.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.main} ${isActive ? styles.active : ''}`}>
          <div className={styles.topbar}>
            <div className={styles.toggle} onClick={() => setIsActive(!isActive)}>
              <MenuOutlined />
            </div>

            <div className={styles.search}>
              <label>
                <input type="text" placeholder="Search" />
                <span className={styles.icon}>
                  <SearchOutlined />
                </span>
              </label>
            </div>

            <div className={styles.avatar}>
              <span className={styles.name}>
                <strong>John Doe</strong> <br /> john.doe@gmail.com
              </span>
              <div className={styles.user}>
                <img src="https://joeschmoe.io/api/v1/jess" alt="Avatar" />
              </div>
            </div>
          </div>

          <div className={styles.content}>
            {props.children}
            {/* <div className={styles.footer}>
              © 2022 &quot;Rylan&quot; Yunan Zhou, All Rights Reserved.
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
