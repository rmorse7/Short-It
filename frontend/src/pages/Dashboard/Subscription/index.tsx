import React from 'react';
import { WarningOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

export default function Subscription() {
  return (
    <div className={styles.subscription}>
      <WarningOutlined />
      <span>Under Construction</span>
    </div>
  );
}
