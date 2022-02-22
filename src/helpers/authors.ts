import { IAuthor } from '../models/Author';

export const getAuthors = (
  authors: Array<string>,
  authorsList: Array<IAuthor> | null
): string => {
  const authorsResultList: Array<string | undefined> = authors.map(
    (authorId) => {
      return authorsList?.find((author) => author.id === authorId)?.name;
    }
  );
  return authorsResultList.join(', ');
};
