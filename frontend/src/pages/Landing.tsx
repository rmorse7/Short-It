import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Tooltip } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';

import Link from '../Components/Link';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/rylanzhou/image/upload/v1645317289/COMP%20539/539logo_2_x126ll.png"
            alt="logo"
          />
          <span>Short-It</span>
        </div>

        <div className={styles.operation}>
          <Tooltip title="Log In">
            <RouterLink to="/dashboard" className={styles.icon}>
              <LoginOutlined />
            </RouterLink>
          </Tooltip>
          <Tooltip title="Sign Up">
            <span className={styles.icon}>
              <UserAddOutlined />
            </span>
          </Tooltip>
        </div>
      </div>

      <div className={styles.main}>
        <img
          className={styles.background}
          src="https://res.cloudinary.com/rylanzhou/image/upload/v1645328529/COMP%20539/logo_purple_fislw3.png"
          alt="logo"
        />

        <ShortItMain showCard />

        <div className={styles.description}>
          <section>
            <h2>Shorten complex URL in one click!</h2>
            <p>
              Short-it provides services to shorten any long, complex link on the internet to
              shorter version. You just need to copy the link, paste in the textbox above, and click
              &quot;GO&quot;. The shortened url that created just for you will be displayed on your
              screen!
            </p>
          </section>

          <section>
            <h2>Who are we?</h2>
            <p>
              We are Team 4 Short-it. We are a group of brilliant computer engineer from Rice
              University. Our members are Danfeng Yang, Jiaqi He, Oybek Khakimjanov, Qiaomu Zhang,
              Ricky Morse, Rylan Zhou, Sandy Tao, Siyi Wang.
            </p>
          </section>
        </div>

        <div className={styles.footer}>
          © 2022 &quot;Rylan&quot; Yunan Zhou, All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export function ShortItMain({ showCard }: { showCard?: boolean }) {
  return (
    <div className={styles['short-it-main']}>
      <h1>Shorten Your URL RIGHT AWAY!</h1>
      <div className={styles['input-container']}>
        <div className={styles.input}>
          <input type="text" />
          <button>GO!</button>
        </div>

        {showCard && (
          <div className={styles.links}>
            <Link origin="https://www.google.com" url="short.it/4Ef3A" />
          </div>
        )}
      </div>
    </div>
  );
}
