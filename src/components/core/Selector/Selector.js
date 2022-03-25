import React, { useMemo, memo, useCallback } from 'react';
import './selector.css';

const DEFAULT_CONFIG_OPTIONS = {
  placeHolderText: 'Select',
  onChange: () => {},
  className: 'dropdown',
  data: [],
  currValue: null,
  idField: '',
};

export function Selector(props) {
  const config = Object.assign({}, DEFAULT_CONFIG_OPTIONS, props);
  const selectedVal = config.currValue ? config.currValue : '';

  const renderOptions = useMemo(() => {
    console.log("rendering Options inside useMemo!!!!!!");
    const {data, valueField, textField, idField} = props;

    return data.map(item => {
      return (
        <option
          disabled={!!item.disabled}
          key={item[idField]}
          value={item[valueField]}
        >
          {item[textField]}
        </option>
      );
    });
  }, [props.data]);

  const handleValueChange = useCallback((e) => {
    e.stopPropagation();

    if (typeof config.onChange === 'function') {
        config.onChange(e);
    }
  }, [config.onChange]);

  return (
      <>
        <select
          className={config.className}
          onChange={handleValueChange}
          required={config.required}
          id={config.id}
          value={selectedVal}
        >
          <option value=''>
            {config.placeHolderText}
          </option>
          {renderOptions}
      </select>
  </>
  );
}