import { mockedAuthorsList } from '../constants';

export const getAuthors = (authors: Array<string>): string => {
  const authorsList: Array<string | undefined> = authors.map((authorId) => {
    return mockedAuthorsList.find((author) => author.id === authorId)?.name;
  });
  return authorsList.join(', ');
};
