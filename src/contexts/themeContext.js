import { createContext } from 'react';

const themeContext = createContext([{}, () => {}]);

export { themeContext as ThemeContext};