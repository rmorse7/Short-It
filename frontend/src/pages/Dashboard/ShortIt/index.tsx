import React from 'react';
import { Button, Space, Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { ShortItMain } from '../../Landing';

import styles from './styles.module.scss';

const columns: ColumnsType<RecordType> = [
  {
    title: 'Short URL',
    dataIndex: 'url',
    key: 'url',
    render: (val) => <a href={val}>{val}</a>,
  },
  {
    title: 'Origin URL',
    dataIndex: 'origin',
    key: 'origin',
    ellipsis: { showTitle: false },
    render: (val) => (
      <Tooltip placement="topLeft" title={val}>
        {val}
      </Tooltip>
    ),
  },
  {
    title: 'Create Time',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (val) => {
      return <span>{new Date(val).toLocaleString()}</span>;
    },
  },
  {
    title: 'Expire Time',
    dataIndex: 'expireTime',
    key: 'expireTime',
    render: (val) => {
      return <span>{new Date(val).toLocaleString()}</span>;
    },
  },
  {
    title: 'Operation',
    key: 'operation',
    width: 200,
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button type="primary" danger onClick={() => console.log(record)}>
          Delete
        </Button>
      </Space>
    ),
  },
];

export const linksData: RecordType[] = [
  {
    id: 1,
    url: 'short.it/4Ef3A',
    origin: 'http://a.veryveryveryveryveryveryveryveryveryvery.long.com',
    createTime: 1645385693457,
    expireTime: 1645388693457,
  },
  {
    id: 2,
    url: 'short.it/4Ef3A',
    origin: 'http://example.com',
    createTime: 1645385693457,
    expireTime: 1645388693457,
  },
  {
    id: 3,
    url: 'short.it/4Ef3A',
    origin: 'http://example.com',
    createTime: 1645385693457,
    expireTime: 1645388693457,
  },
  {
    id: 4,
    url: 'short.it/4Ef3A',
    origin: 'http://example.com',
    createTime: 1645385693457,
    expireTime: 1645388693457,
  },
  {
    id: 5,
    url: 'short.it/4Ef3A',
    origin: 'http://example.com',
    createTime: 1645385693457,
    expireTime: 1645388693457,
  },
];

export default function ShortIt() {
  return (
    <div className={styles['short-it']}>
      <ShortItMain />

      <div className={styles['table-container']}>
        <Table className={styles.table} columns={columns} dataSource={linksData} rowKey="id" />
      </div>
    </div>
  );
}
