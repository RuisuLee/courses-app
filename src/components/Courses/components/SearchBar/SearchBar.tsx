import { Formik } from 'formik';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import {
  SEARCH_BAR_INPUT_LABEL_TEXT,
  SEARCH_BAR_INPUT_PLACEHOLDER_TEXT,
  SEARCH_BUTTON_TEXT,
} from '../../../../constants';

import './SearchBar.scss';

interface ISearchBarProps {
  search: (value: string) => void;
}

interface ISearchValues {
  searchInput: string;
}

export function SearchBar({ search }: ISearchBarProps) {
  const onSubmit = (values: ISearchValues) => {
    search(values.searchInput);
  };
  return (
    <Formik initialValues={{ searchInput: '' }} onSubmit={onSubmit}>
      {(props) => (
        <form className='search-bar-wrapper' onSubmit={props.handleSubmit}>
          <Input
            name='searchInput'
            labelText={SEARCH_BAR_INPUT_LABEL_TEXT}
            placeholdetText={SEARCH_BAR_INPUT_PLACEHOLDER_TEXT}
            className='search-bar-wrapper__input'
            type='text'
          />
          <Button
            className='search-bar-wrapper__button'
            buttonText={SEARCH_BUTTON_TEXT}
            buttonType='submit'
          />
        </form>
      )}
    </Formik>
  );
}
