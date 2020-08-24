import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/MainWrap';
import Leftside from './components/left/Leftside';

test('test mainwrap ', () => {

  const {getByText}  = render(<Leftside/>)

});
