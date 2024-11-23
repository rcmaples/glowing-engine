'use client';
import React, { useMemo, useCallback, useState } from 'react';
import { Flex, Stack } from '@sanity/ui';
import '@/app/globals.css';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';

import _ from 'lodash';

import { NumberInputProps, set, unset } from 'sanity';

const marks = [
  {
    value: 1.05,
    label: 'awful',
  },
  { value: 2, label: '' },
  { value: 3, label: '' },
  { value: 4, label: '' },
  { value: 5, label: '' },
  { value: 6, label: '' },
  { value: 7, label: '' },
  { value: 8, label: '' },
  { value: 9, label: '' },
  { value: 9.9, label: 'fantastic' },
];

const debounce = _.debounce;

type CustomSliderInputProps = NumberInputProps & {
  schemaType: {
    options?: {
      suffix?: string;
      min?: number;
      max?: number;
      step?: number;
    };
  };
};

const StyledSlider = styled(Slider)`
  .MuiSlider-root {
    color: '#D28A12';
    height: 8px;
    // padding: '15px 0';
  }

  .MuiSlider-thumb {
    height: 20px;
    width: 20px;
    background-color: #ffffff;
  }

  .MuiSlider-thumb.Mui-focusVisible,
  .MuiSlider-thumb:hover {
    box-shadow: 0px 0px 0px 2px #fcf3bb inset;
  }

  /* .MuiSlider-valueLabel {} */

  .MuiSlider-mark {
    // left: 1px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    color: #fff !important;
    opacity: 0.5;
    // margin: 0 auto;
  }

  .MuiSlider-markLabel {
    color: #fff;
  }

  .MuiSlider-track {
    border: none;
    height: 8px;
    color: #d28a12;
  }

  .MuiSlider-rail {
    opacity: 0.5;
    box-shadow: 'inset 0px 0px 4px -2px #000000';
    background-color: #d0d0d0;
    height: 8px;
  }
`;

const CustomSliderInput = (props: CustomSliderInputProps) => {
  const { schemaType, value, onChange, elementProps } = props;
  const { options } = schemaType;
  const suffix = options?.suffix;
  const min = options?.min || 1;
  const max = options?.max || 10;
  const step = options?.step || 1;

  const [rangeValue, setRangeValue] = useState(5);

  const emitSetValue = useCallback(
    (nextValue: number) => {
      onChange(set(nextValue));
    },
    [onChange]
  );

  const debouncedSliderChange = useMemo(
    () => debounce(emitSetValue, 100),
    [emitSetValue]
  );

  const handleRangeSliderChange = useCallback(
    (e: Event, value: number) => {
      setRangeValue(value);
      debouncedSliderChange(value);
    },
    [debouncedSliderChange, setRangeValue]
  );

  const commitChange = () => {
    onChange(set(rangeValue));
  };

  return (
    <Flex style={{ paddingRight: '1rem', margin: '0 15px' }}>
      <Stack space={3} flex={1}>
        <StyledSlider
          flex={0}
          // step={step}
          marks={marks}
          value={rangeValue}
          min={min}
          max={max}
          // @ts-ignore
          onChange={handleRangeSliderChange}
          onChangeCommitted={commitChange}
          valueLabelDisplay="auto"
          // color="info"
        />
        <Flex>{props.renderDefault(props)}</Flex>
      </Stack>
    </Flex>
  );
};

export default CustomSliderInput;
