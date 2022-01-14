import { render, screen } from '@testing-library/react';
import FormEducationGroup from '../FormEducationGroup';

describe('FormEducationGroup component', () => {
  const FormEducationGroupElementPlaceholderText = [
    'degree',
    'university',
    'date',
    'description'
  ];

  test.each(FormEducationGroupElementPlaceholderText)(
    'expect a FormEducationGroup component to be created',
    (text) => {
      render(<FormEducationGroup />);

      const FormEducationGroupElement = screen.getByPlaceholderText(text);

      expect(FormEducationGroupElement).toBeInTheDocument();
    }
  );

  test('expeact a FormEducationGroup component to be created with a ButtonAdd component', () => {
    render(<FormEducationGroup />);

    const buttonAdd = screen.getByRole('button');

    expect(buttonAdd).toBeInTheDocument();
  });
});
