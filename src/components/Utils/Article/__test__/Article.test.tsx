import { render, screen } from '@testing-library/react';
import Article from '../Article';

describe('Article component', () => {
  const articleStringTest = (children: string) =>
    render(<Article>{children}</Article>);

  test('expect a Article component to be created', () => {
    render(<Article />);

    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
  });

  test('expect a Article component to be created containing passed in string', () => {
    const articleString = 'i hecking love emma watson';

    articleStringTest(articleString);

    const article = screen.getByText(articleString);

    expect(article).toHaveTextContent(articleString);
  });
});
