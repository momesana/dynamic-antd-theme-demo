import React, { useCallback, useState } from 'react';
import { Select } from 'antd';
import DemoTable from './DemoTable';
import './App.css';

import DynamicTheme from './theming';
import { themes } from './themes';

const defaultTheme = themes[0];

const options = themes.map((theme) => ({
  label: theme.displayName,
  value: theme.id
}));

export default function App() {
  const [themeId, setThemeId] = useState(defaultTheme.id);
  const selectThemeId = useCallback(
    (option) => setThemeId(option as string),
    []
  );

  return (
    <>
      <DynamicTheme themes={themes} value={themeId} />
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
