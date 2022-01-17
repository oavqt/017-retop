import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Resume from '../Resume';

describe('Resume component', () => {
  test('expect a Resume component to be created', () => {
    render(<Resume />);

    const resume = screen.getByRole('main');

    expect(resume).toBeInTheDocument();
  });

  test('expect a Form component to be in the Resume component', () => {
    render(<Resume form={{ attrs: { rtlTestID: { form: 'form' } } }} />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });
});

describe('FormPersonal component', () => {
  test('expect FormPersonal Input and TextArea components values to update', () => {
    render(<Resume />);

    const first = screen.getByPlaceholderText('first name');
    const last = screen.getByPlaceholderText('last name');
    const title = screen.getByPlaceholderText('title');
    const address = screen.getByPlaceholderText('address');
    const phone = screen.getByPlaceholderText('phone number');
    const email = screen.getByPlaceholderText('email');

    const about = screen.getByPlaceholderText('about');

    const inptText = [first, last, title, address, phone, email, about];

    inptText.forEach((inptText) =>
      userEvent.type(inptText, 'i hecking love emma watson')
    );

    inptText.forEach((inptText) =>
      expect(inptText).toHaveValue('i hecking love emma watson')
    );
  });
});

describe('FormExperience and FormEducation components', () => {
  test('expect FormExperience ButtonAdd to create a FormExperienceGroup', () => {
    render(<Resume />);

    const buttonAdd = screen.getByText('add experience');

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);

    const inputs = screen.getAllByPlaceholderText('position');

    expect(inputs).toHaveLength(5);
  });

  test('expect FormEducation ButtonAdd to create a FormEducationGroup', () => {
    render(<Resume />);

    const buttonAdd = screen.getByText('add education');

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);

    const inputs = screen.getAllByPlaceholderText('university');

    expect(inputs).toHaveLength(5);
  });
});

describe('FormExperienceGroup and FormEducationGroup components', () => {
  test('expect FormExperienceGroup ButtonRemove to remove a FormExperienceGroup', async () => {
    render(
      <Resume
        form={{
          attrs: { rtlTestID: { btn: { experience: 'btn--experience' } } }
        }}
      />
    );

    const experienceButtonAdd = screen.getByText('add experience');

    for (let i = 0; i < 4; i++) userEvent.click(experienceButtonAdd);

    const experienceButtonRemove = screen.queryAllByTestId('btn--experience');

    expect(experienceButtonRemove).toHaveLength(5);

    for (let i = experienceButtonRemove.length - 1; i >= 2; i--)
      userEvent.click(experienceButtonRemove[i]);

    const experienceButtonRemoveReQuery =
      screen.queryAllByTestId('btn--experience');

    expect(experienceButtonRemoveReQuery).toHaveLength(2);
  });

  test('expect FormEducationGroup ButtonRemove to remove a FormEducationGroup', async () => {
    render(
      <Resume
        form={{
          attrs: { rtlTestID: { btn: { education: 'btn--education' } } }
        }}
      />
    );

    const educationButtonAdd = screen.getByText('add education');

    for (let i = 0; i < 4; i++) userEvent.click(educationButtonAdd);

    const educationButtonRemove = screen.queryAllByTestId('btn--education');

    expect(educationButtonRemove).toHaveLength(5);

    for (let i = educationButtonRemove.length - 1; i >= 0; i--)
      userEvent.click(educationButtonRemove[i]);

    const educationButtonRemoveReQuery =
      screen.queryAllByTestId('btn--education');

    expect(educationButtonRemoveReQuery).toHaveLength(0);
  });
});
