import { screen } from '@testing-library/react';
import { Header } from '../Header';
import { renderApp } from '../../../helpers/testUtils';

describe('Header tests  ', () => {
  beforeEach(() => {
    renderApp(<Header />);
  });

  it('Should render logo', () => {
    expect(screen.getByTestId('logo')).toBeVisible();
  });

  it('Should render username', () => {
    expect(screen.getByTestId('username').textContent).toEqual('Test Name');
  });
});
