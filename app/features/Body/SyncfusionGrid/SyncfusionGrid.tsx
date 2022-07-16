import * as React from 'react';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
  DetailRow,
  ColumnChooser,
  Toolbar,
  Edit,
} from '@syncfusion/ej2-react-grids';
import { images_url } from '../../../../core';
import { useSyncfusionGrid } from './useSyncfusionGrid';

export const SyncfusionGrid = () => {
  const {
    people,
    columns,
    childEmailGridOptions,
    filterRowsByGender,
    updatePersonHandler,
  } = useSyncfusionGrid();

  /**
   * Function always invoked for render general columns
   */
  const coreTemplate = React.useCallback((props: any, column: string) => {
    return <div>{props[column] || '--'}</div>;
  }, []);

  /**
   * Function always invoked for render only gender related columns
   */
  const genderTemplate = React.useCallback((props: any, column: string) => {
    if (!props[column]) return coreTemplate(props, column);

    return (
      <div>
        {props[column].toLowerCase() === 'male' ? (
          <img className="rx-icon" src={images_url.male} alt={'Male'} />
        ) : (
          <img className="rx-icon" src={images_url.female} alt={'Female'} />
        )}
      </div>
    );
  }, []);

  /**
   * Switch between the different type of templates
   */
  const getTemplate = React.useCallback((props: any, column: string) => {
    const _column = column.toLowerCase();
    switch (_column) {
      case 'gender':
        return genderTemplate(props, column);
      default:
        return coreTemplate(props, column);
    }
  }, []);

  /**
   * Function always invoked for render only gender related columns
   */
  const headerGenderTemplate = React.useCallback((props: any) => {
    return (
      <div className="d-flex justify-content-end align-items-center">
        <span>{props.field}</span>
        <div className="d-flex ml-10">
          <img
            className="rx-icon cursor-pointer"
            src={images_url.male}
            alt={'Male'}
            onClick={() => filterRowsByGender('male')}
          />
          <img
            className="rx-icon cursor-pointer ml-10"
            src={images_url.female}
            alt={'Female'}
            onClick={() => filterRowsByGender('female')}
          />
        </div>
      </div>
    );
  }, []);

  /**
   * Switch between the different type of header templates
   */
  const getHeaderTemplate = React.useCallback((props: any) => {
    const _column = props.field.toLowerCase();

    switch (_column) {
      case 'gender':
        return headerGenderTemplate(props);
      default:
        return <div>{props.field}</div>;
    }
  }, []);

  /**
   * Invoked on multiple type of events
   * Used for listed to inline grid updates and update the state when the update is finished
   */
  const actionBegin = (args: any) => {
    if (
      args.action == 'edit' &&
      args.type == 'actionBegin' &&
      args.requestType == 'save'
    ) {
      updatePersonHandler(args.data);
    }
  };

  return (
    <GridComponent
      dataSource={people}
      allowPaging={true}
      pageSettings={{ pageSize: 5 }}
      childGrid={childEmailGridOptions}
      showColumnChooser={true}
      toolbar={['ColumnChooser']}
      editSettings={{ allowEditing: true }}
      actionBegin={actionBegin}
    >
      <ColumnsDirective>
        {columns.map((column) => (
          <ColumnDirective
            key={column}
            field={column}
            width="100"
            textAlign="Right"
            template={(args: any) => getTemplate(args, column)}
            headerTemplate={getHeaderTemplate}
            editType={
              column.toLowerCase() === 'gender' ? 'dropdownedit' : 'normal'
            }
            allowEditing={column.toLowerCase() === 'gender'}
          />
        ))}
      </ColumnsDirective>
      <Inject
        services={[Page, Sort, Group, DetailRow, ColumnChooser, Toolbar, Edit]}
      />
    </GridComponent>
  );
};
