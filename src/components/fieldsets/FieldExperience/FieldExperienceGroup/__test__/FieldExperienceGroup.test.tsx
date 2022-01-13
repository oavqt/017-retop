import { render, screen } from '@testing-library/react';
import FieldExperienceGroup from '../FieldExperienceGroup';

describe('FieldExperienceGroup component', () => {
  const FieldExperienceGroupElementPlaceholderText = [
    'title',
    'company',
    'date',
    'description'
  ];

  test.each(FieldExperienceGroupElementPlaceholderText)(
    'expect a FieldExperienceGroup component to be created',
    (text) => {
      render(<FieldExperienceGroup />);

      const FieldExperienceGroupElement = screen.getByPlaceholderText(text);

      expect(FieldExperienceGroupElement).toBeInTheDocument();
    }
  );
});
