import { render, screen } from '@testing-library/react';
import FormExperienceGroup from '../FormExperienceGroup';

describe('FormExperienceGroup component', () => {
  const FormExperienceGroupElementPlaceholderText = [
    'title',
    'company',
    'date',
    'description'
  ];

  test.each(FormExperienceGroupElementPlaceholderText)(
    'expect a FormExperienceGroup component to be created',
    (text) => {
      render(<FormExperienceGroup />);

      const FormExperienceGroupElement = screen.getByPlaceholderText(text);

      expect(FormExperienceGroupElement).toBeInTheDocument();
    }
  );

  test('expeact a FormExperienceGroup component to be created with a ButtonAdd component', () => {
    render(<FormExperienceGroup />);

    const buttonAdd = screen.getByRole('button');

    expect(buttonAdd).toBeInTheDocument();
  });
});
