import { fireEvent, render, screen } from '@testing-library/react';
import Resume from '../Resume';

describe('Resume component', () => {
  test('expect a Resume component to be created', () => {
    render(<Resume />);

    const resume = screen.getByRole('main');

    expect(resume).toBeInTheDocument();
  });

  test('expect a Form component to be in the Resume component', () => {
    render(<Resume form={{ attrs: { ['data-testid']: 'form' } }} />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });
});

describe('FormExperience and FormEducation components', () => {
  test('expect FormExperience ButtonAdd to create a FormExperienceGroup', () => {
    render(<Resume />);

    const buttonAdd = screen.getByText('add experience');

    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);

    const positionInputs = screen.getAllByPlaceholderText('position');

    expect(positionInputs).toHaveLength(5);
  });

  test('expect FormEducation ButtonAdd to create a FormEducationGroup', () => {
    render(<Resume />);

    const buttonAdd = screen.getByText('add education');

    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);

    const positionInputs = screen.getAllByPlaceholderText('university');

    expect(positionInputs).toHaveLength(5);
  });
});
