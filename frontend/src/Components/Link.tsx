import React from 'react';
import { Tooltip } from 'antd';
import styles from './styles.module.scss';

interface LinkProps {
  origin: string;
  url: string;
}

export default function Link(props: LinkProps) {
  return (
    <div className={styles.link}>
      <div className={styles.text}>
        <div className={styles.url}>{props.url}</div>
        <div className={styles.origin}>{props.origin}</div>
      </div>

      <div className={styles.button}>
        <Tooltip title="Copied!" color="#60C9BF" trigger="click" placement="bottom">
          Copy
        </Tooltip>
      </div>
    </div>
  );
}
