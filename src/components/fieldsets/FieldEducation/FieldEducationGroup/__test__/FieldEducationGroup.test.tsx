import { render, screen } from '@testing-library/react';
import FieldEducationGroup from '../FieldEducationGroup';

describe('FieldEducationGroup component', () => {
  const FieldEducationGroupElementPlaceholderText = [
    'degree',
    'university',
    'date',
    'description'
  ];

  test.each(FieldEducationGroupElementPlaceholderText)(
    'expect a FieldEducationGroup component to be created',
    (text) => {
      render(<FieldEducationGroup />);

      const FieldEducationGroupElement = screen.getByPlaceholderText(text);

      expect(FieldEducationGroupElement).toBeInTheDocument();
    }
  );

  test('expeact a FieldEducationGroup component to be created with a ButtonAdd component', () => {
    render(<FieldEducationGroup />);

    const buttonAdd = screen.getByRole('button');

    expect(buttonAdd).toBeInTheDocument();
  });
});
