import { render, screen } from '@testing-library/react';
import Resume from '../Resume';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
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
    const inptGroupTextTest = (
      nameOfGroup: HTMLElement[][],
      toHaveValue: string,
      toHaveLength: number
    ): void => {
      nameOfGroup.forEach((inptGroup: HTMLElement[]) =>
        expect(inptGroup).toHaveLength(toHaveLength)
      );
      2;
      nameOfGroup.forEach((inptGroup: HTMLElement[]) => {
        let toHaveValueDiff = '';
        inptGroup.forEach((inptText: HTMLElement) => {
          toHaveValueDiff += `${toHaveValue}, `;
          userEvent.type(inptText, toHaveValueDiff);
        });
      });

      nameOfGroup.forEach((inptGroup: HTMLElement[]) => {
        let toHaveValueDiff = '';
        inptGroup.forEach((inptText: HTMLElement) => {
          expect(inptText).not.toHaveValue(toHaveValueDiff);
          toHaveValueDiff += `${toHaveValue}, `;
          expect(inptText).toHaveValue(toHaveValueDiff);
        });
      });
    };

    describe('FormExperienceGroup component', () => {
      // eslint-disable-next-line jest/expect-expect
      test('expect FormExperienceGroup Input and TextArea components values to update', () => {
        render(<Resume />);

        const experienceButtonAdd = screen.getByText('add experience');

        for (let i = 0; i < 4; i++) userEvent.click(experienceButtonAdd);

        const position = screen.getAllByPlaceholderText('position');
        const company = screen.getAllByPlaceholderText('company');
        const date = screen.getAllByPlaceholderText('date');
        const description = screen.getAllByPlaceholderText('description');

        const inptUnique = [position, company];
        const inptTextCommon = [date, description];

        inptGroupTextTest(inptUnique, 'i hecking love emma watson', 5);
        inptGroupTextTest(inptTextCommon, 'i hecking love emma watson', 6);
      });

      test('expect FormExperienceGroup ButtonRemove to remove all FormExperienceGroups', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { experience: 'btn--experience' } } }
            }}
          />
        );

        const experienceButtonAdd = screen.getByText('add experience');

        for (let i = 0; i < 4; i++) userEvent.click(experienceButtonAdd);

        const experienceButtonRemove =
          screen.queryAllByTestId('btn--experience');

        expect(experienceButtonRemove).toHaveLength(5);

        for (let i = experienceButtonRemove.length - 1; i >= 2; i--)
          userEvent.click(experienceButtonRemove[i]);

        const experienceButtonRemoveReQuery =
          screen.queryAllByTestId('btn--experience');

        expect(experienceButtonRemoveReQuery).toHaveLength(2);
      });

      test('expect FormEducationGroup ButtonRemove to remove a FormEducationGroup', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { experience: 'btn--experience' } } }
            }}
          />
        );

        const experienceButtonAdd = screen.getByText('add experience');

        for (let i = 0; i < 4; i++) userEvent.click(experienceButtonAdd);

        const position = screen.getAllByPlaceholderText('position');

        const inptUnique = [position];

        inptGroupTextTest(inptUnique, 'i hecking love emma watson', 5);

        expect(inptUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptUnique[0][3]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        const experienceButtonRemove =
          screen.queryAllByTestId('btn--experience');

        userEvent.click(experienceButtonRemove[2]);

        expect(inptUnique[0][2]).not.toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );
      });
    });

    describe('FormEducationGroup component', () => {
      // eslint-disable-next-line jest/expect-expect
      test('expect FormEducation Input and TextArea components values to update', () => {
        render(<Resume />);

        const educationButtonAdd = screen.getByText('add education');

        for (let i = 0; i < 4; i++) userEvent.click(educationButtonAdd);

        const university = screen.getAllByPlaceholderText('university');
        const degree = screen.getAllByPlaceholderText('degree');
        const date = screen.getAllByPlaceholderText('date');
        const description = screen.getAllByPlaceholderText('description');

        const inptUnique = [university, degree];
        const inptTextCommon = [date, description];

        inptGroupTextTest(inptUnique, 'i hecking love emma watson', 5);
        inptGroupTextTest(inptTextCommon, 'i hecking love emma watson', 6);
      });

      test('expect FormEducationGroup ButtonRemove to remove all FormEducationGroups', () => {
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

      test('expect FormEducationGroup ButtonRemove to remove a FormEducationGroup', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { education: 'btn--education' } } }
            }}
          />
        );

        const educationButtonAdd = screen.getByText('add education');

        for (let i = 0; i < 4; i++) userEvent.click(educationButtonAdd);

        const university = screen.getAllByPlaceholderText('university');

        const inptUnique = [university];

        inptGroupTextTest(inptUnique, 'i hecking love emma watson', 5);

        expect(inptUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptUnique[0][3]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        const educationButtonRemove = screen.queryAllByTestId('btn--education');

        userEvent.click(educationButtonRemove[2]);

        expect(inptUnique[0][2]).not.toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );
      });
    });
  });
});
