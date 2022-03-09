import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
  },
  courses: [],
  authors: [
    {
      id: 'mock author id',
      name: 'mock author name',
    },
  ],
};
const mockedStore: any = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

export function renderApp(ui: JSX.Element) {
  return render(
    <HistoryRouter history={history}>
      <Provider store={mockedStore}>{ui}</Provider>
    </HistoryRouter>
  );
}
