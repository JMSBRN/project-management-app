import { render } from '@testing-library/react';
import React from 'react';
import TaskForm from './TaskForm';

describe('<Form />', () => {
  it('should be ', () => {
    render(
      <TaskForm
        setChangeTask={jest.fn()}
        tasksIdArr={[0, 0]}
        columns={[
          {
            title: 'In Progress',
            items: [],
          },
        ]}
        setColumns={jest.fn()}
        createNewTask={false}
        ColumnId={null}
        setCreateNewTask={jest.fn()}
      />
    );
  });
});
