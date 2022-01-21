import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputFile from '../InputFile';

describe('InputFile component', () => {
  test('expect a Input component to be created', () => {
    render(<InputFile attrs={{ placeholder: 'placeholder' }} />);

    const inputFile = screen.getByPlaceholderText('placeholder');

    expect(inputFile).toBeInTheDocument();
  });

  test('expect a Input component with type, placeholder, and etc... attrs', () => {
    render(
      <InputFile
        attrs={{
          name: 'name',
          placeholder: 'placeholder',
          type: 'file'
        }}
      />
    );

    const inputFile = screen.getByPlaceholderText('placeholder');

    expect(inputFile).toHaveAttribute('name', 'name');
    expect(inputFile).toHaveAttribute('type', 'file');
    expect(inputFile).toHaveAttribute('placeholder', 'placeholder');
  });

  test('expect a Input component to be created and accept png/jpg files', () => {
    render(
      <InputFile
        attrs={{
          name: 'name',
          placeholder: 'placeholder',
          type: 'file'
        }}
      />
    );

    const inputFile = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;

    const pngFile = new File(['batchest'], 'i hecking love emma watson', {
      type: 'image/png'
    });

    userEvent.upload(inputFile, pngFile);

    expect(inputFile.files).toHaveLength(1);
    expect(inputFile.files?.[0]).toStrictEqual(pngFile);

    const jpegFile = new File(['batchest'], 'i hecking love emma watson', {
      type: 'image/jpeg'
    });

    userEvent.upload(inputFile, jpegFile);

    expect(inputFile.files).toHaveLength(1);
    expect(inputFile.files?.[0]).toStrictEqual(pngFile);
  });
});
