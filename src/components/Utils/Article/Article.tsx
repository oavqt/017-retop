import { Component, ReactNode } from 'react';
import ArticleStyled from './Article.styled';

class Article extends Component {
  render(): ReactNode {
    return <ArticleStyled>{this.props.children}</ArticleStyled>;
  }
}

export default Article;
