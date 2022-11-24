import { render } from '@testing-library/react';
import React from 'react';
import ColumnForm from './ColumnForm';

describe('<Form />', () => {
  it('should be ', () => {
    render(
      <ColumnForm
        setchangeColumn={jest.fn()}
        columnId={1}
        columns={[
          {
            title: 'dfsadfas',
            items: [
              {
                id: '0',
                Task: '1 задача',
                message: 'Зделать что то много чего',
              },
            ],
          },
        ]}
        setColumns={jest.fn()}
      />
    );
  });
});
