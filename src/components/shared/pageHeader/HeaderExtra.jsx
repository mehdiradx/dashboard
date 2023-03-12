import { Button, Input } from 'antd';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import { callbackUtils } from 'utils';

function HeaderExtra({ buttons, searchPlaceholder, onSearch, buttonComponents, defaultValue = '' }) {
  const debouncedSearch = callbackUtils.debounce(onSearch, 500);

  const onChangeValue = ({ target }) => {
    if (target.value.length > 1 || target.value.length === 0) {
      debouncedSearch(target.value);
    }
  };

  return (
    <>
      <Input.Search
        defaultValue={defaultValue}
        onChange={onChangeValue}
        placeholder={searchPlaceholder}
        onSearch={onSearch}
      />
      {buttons?.map(({ title, onClick, type = 'add' }) =>
        type === 'add' ? (
          <Button key={title} icon={<PlusOutlined />} onClick={onClick} type="primary">
            {title}
          </Button>
        ) : (
          <Button key={title} icon={<FilterOutlined />} onClick={onClick}>
            {title}
          </Button>
        )
      )}
      {buttonComponents && buttonComponents()}
    </>
  );
}

export default HeaderExtra;
