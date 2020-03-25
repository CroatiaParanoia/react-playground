import React, { useEffect, useState, useCallback, useMemo } from 'react';
import produce from 'immer';
import * as R from 'ramda';
import { Checkbox, List, Table } from 'antd';

interface DataSourceItem {
  attrName: string;
  attrId: string;
  attrValues: string[];
}

type InnerDataSourceItem = DataSourceItem & {
  attrValueSelected: string[];
};

const DynamicForm: React.FC<{ dataSource: DataSourceItem[]; value: string[][] }> = ({
  dataSource,
  value
}) => {
  const [innerDataSource, setInnerDataSource] = useState<InnerDataSourceItem[]>([]);

  const onCheckboxChange = useCallback(
    (checked, attrId, attrValue) => {
      const draftFn = (draftState: InnerDataSourceItem[]) => {
        draftState.forEach((item) => {
          if (item.attrId === attrId) {
            item.attrValueSelected = item.attrValueSelected.filter((v) => v !== attrValue);

            if (checked) item.attrValueSelected.push(attrValue);
          }
        });
      };
      setInnerDataSource(produce(innerDataSource, draftFn));
    },
    [innerDataSource, setInnerDataSource]
  );

  const tableDataSource = useMemo(() => {
    interface TreeItem {
      attrName: string;
      attrId: string;
      attrValue: string;
      attrChildren: TreeItem[];
    }

    const fn = (arr: InnerDataSourceItem[]): TreeItem[] => {
      if (!arr.length) {
        return [];
      }
      const firstItem = R.head(arr);
      const attrChildren = fn(R.tail(arr));
      return firstItem!.attrValueSelected.map((item) => {
        return {
          attrName: firstItem!.attrName,
          attrId: firstItem!.attrId,
          attrValue: item,
          attrChildren
        };
      });
    };

    const treeArr = fn(innerDataSource);

    const maxLevel = innerDataSource.length;

    const back = (tree: TreeItem, path?: any[], res: any[] = []) => {
      if (!tree || !tree.attrChildren.length) {
        return [];
      }
      const originPath = path || [
        { attrName: tree.attrName, attrId: tree.attrId, attrValue: tree.attrValue }
      ];
      tree.attrChildren.forEach((item) => {
        const itemKey = originPath
          .map((v) => v.attrValue)
          .concat(item.attrValue)
          .join('-');
        const newItem = {
          attrName: item.attrName,
          attrId: item.attrId,
          attrValue: item.attrValue,
          key: itemKey
        };
        const newPath = [...originPath, newItem];
        back(item, newPath, res);
        if (newPath.length === maxLevel) {
          const rowItem = newPath.reduce(
            (pre, item) => ({ ...pre, [item.attrId]: item.attrValue, key: item.key }),
            {}
          );
          res.push(rowItem);
        }
      });

      return res;
    };

    const res: any[] = [];

    treeArr.forEach((item) => {
      res.push(...back(item));
    });
    return res;
  }, [innerDataSource]);

  const tableColumn = useMemo(() => {
    return innerDataSource.map((item) => {
      return {
        title: item.attrName,
        dataIndex: item.attrId,
        key: item.attrId
      };
    });
  }, [innerDataSource]);

  useEffect(() => {
    const newInnerDataSource: InnerDataSourceItem[] = dataSource.map((item, index) => {
      return {
        ...item,
        attrValueSelected: R.clone(value[index] || [])
      };
    });
    setInnerDataSource(produce(newInnerDataSource, () => {}));
  }, [dataSource, value, setInnerDataSource]);

  const renderItem = useCallback(
    (item: InnerDataSourceItem) => {
      return (
        <div className="df ac pt12 pb12">
          <div className="w120 mr12">{item.attrName}</div>
          <div className="f1 ac">
            {item.attrValues.map((attrValueItem) => {
              return (
                <Checkbox
                  key={attrValueItem}
                  checked={item.attrValueSelected.includes(attrValueItem)}
                  onChange={(e) => onCheckboxChange(e.target.checked, item.attrId, attrValueItem)}
                >
                  {attrValueItem}
                </Checkbox>
              );
            })}
          </div>
        </div>
      );
    },
    [onCheckboxChange]
  );

  return (
    <div>
      <div>
        <List dataSource={innerDataSource} renderItem={renderItem} />
        <Table dataSource={tableDataSource} columns={tableColumn} pagination={false} />
      </div>
    </div>
  );
};

export default DynamicForm;
