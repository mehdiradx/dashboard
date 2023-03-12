import React, { useState, useEffect } from 'react';
import { Table } from 'antd'; // TODO: Use UiKit
import { PageHeader } from '@ant-design/pro-layout';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsersData, selectUsersStatus } from 'store/users';
import { getUsersRequestAsync } from 'store/users/asyncActions';
import { Pagination, HeaderExtra } from 'components/shared';
import { colors } from 'const';

const perPage = 10;

function UsersPage() {
  const status = useSelector(selectUsersStatus);
  const users = useSelector(selectUsersData);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUsersRequestAsync({
        perPage,
        page: currentPage,
        query,
      })
    );
  }, [dispatch, currentPage, query]);

  const onSearch = value => {
    setQuery(value);
  };

  return (
    <>
      <PageHeader
        ghost={false}
        title="Users"
        extra={<HeaderExtra searchPlaceholder="Search for a user" onSearch={onSearch} />}
      />
      <Table
        dataSource={users.users}
        rowKey={rc => rc.id}
        locale={{ emptyText: 'No result' }}
        pagination={false}
        className="mt-3"
        loading={status === 'pending'}
      >
        <Table.Column width="8%" title="id" dataIndex="id" />
        <Table.Column width="16%" title="First name" dataIndex="firstName" />
        <Table.Column width="16%" title="Last name" dataIndex="lastName" />
        <Table.Column width="16%" title="Age" dataIndex="age" />
        <Table.Column width="16%" title="Phone" dataIndex="phone" />
        <Table.Column width="16%" title="Username" dataIndex="email" />
      </Table>
      <Pagination
        pageSize={perPage}
        total={users.total}
        current={currentPage}
        onChange={page => setCurrentPage(page)}
        style={{ backgroundColor: colors.GRAY }}
      />
    </>
  );
}

export default UsersPage;
