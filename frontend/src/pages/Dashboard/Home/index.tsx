import React, { useEffect, useState } from 'react';
import { AimOutlined, ApiOutlined, ScheduleOutlined } from '@ant-design/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Button } from 'antd';

import { linksData as _data } from '../ShortIt';
import { getUsers } from '../../../apis/auth';

import styles from './styles.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Number of Clicks',
    },
  },
};

const _chartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: '',
      data: [] as number[],
      backgroundColor: 'rgba(124, 59, 161, 0.5)',
    },
  ],
};

const cardData = [
  { title: 'Total Usage', number: '5', icon: <ScheduleOutlined /> },
  { title: 'Total Clicks', number: '1,504', icon: <AimOutlined /> },
  { title: 'Usage Remain', number: '12', icon: <ApiOutlined /> },
];

export default function Home() {
  const [linksData, setLinksData] = useState<RecordType[]>([]);
  const [currentLink, setCurrentLink] = useState<RecordType>();
  const [chartData, setChartData] = useState(_chartData);

  useEffect(() => {
    setLinksData(_data);
    getUsers();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles['card-box']}>
        {cardData.map((each) => (
          <div key={each.title} className={styles.card}>
            <div>
              <div className={styles.numbers}>{each.number}</div>
              <div className={styles.name}>{each.title}</div>
            </div>
            <div className={styles.icon}>{each.icon}</div>
          </div>
        ))}
      </div>

      <div className={styles['analyze-box']}>
        <ul className={styles.links}>
          {linksData.map((each) => (
            <li
              className={`${each.id === currentLink?.id ? styles.active : ''}`}
              key={each.id}
              onClick={() => {
                setCurrentLink(each);
                setChartData({
                  ...chartData,
                  datasets: [
                    {
                      label: each.url,
                      data: Array(12)
                        .fill(0)
                        .map(() => Math.floor(Math.random() * 100)),
                      backgroundColor: 'rgba(124, 59, 161, 0.5)',
                    },
                  ],
                });
              }}
            >
              <div className={styles.short}>{each.url}</div>
              <div className={styles.origin}>{each.origin}</div>
            </li>
          ))}
        </ul>
        <div className={styles.chart}>
          {currentLink ? (
            <>
              <Bar options={options} data={chartData} />
              <Button className={styles.button} type="primary" danger>
                Delete
              </Button>
            </>
          ) : (
            <h1>Select one link from the left</h1>
          )}
        </div>
      </div>
    </div>
  );
}
