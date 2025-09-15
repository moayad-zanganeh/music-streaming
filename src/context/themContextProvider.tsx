import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';

const cacheLtr = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer],
});

type Props = {
  children: ReactNode;
};
function ThemeContextProvider({ children }: Props) {
  return (
    <CacheProvider value={cacheLtr}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default ThemeContextProvider;
