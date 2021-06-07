import React, { useCallback, useState } from 'react';
import { Select } from 'antd';
import DemoTable from './DemoTable';
import './App.css';

import { defaultThemeId, themes, useAntdTheme } from './theming';

const options = themes.map((theme) => ({
  label: theme.displayName,
  value: theme.id,
}));

export default function App() {
  const [themeId, setThemeId] = useState(defaultThemeId);
  useAntdTheme(themeId);
  const selectThemeId = useCallback(
    (option) => setThemeId(option as string),
    []
  );

  return (
    <>
      <Select
        value={themeId}
        style={{ minWidth: 200 }}
        options={options}
        onSelect={selectThemeId}
      />
      <DemoTable />
    </>
  );
}
