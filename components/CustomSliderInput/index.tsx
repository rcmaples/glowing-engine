import React, { useMemo, useCallback, useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { Flex, Stack, Text, TextInput } from '@sanity/ui';

import _ from 'lodash';

import { NumberInputProps, set, unset } from 'sanity';

import './styles.css';

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

const CustomSliderInput = (props: CustomSliderInputProps) => {
  const { schemaType, value, onChange, elementProps } = props;
  const { options } = schemaType;
  const suffix = options?.suffix;
  const min = options?.min;
  const max = options?.max;
  const step = options?.step || 1;

  const [rangeValue, setRangeValue] = useState([5]);

  const [vibe, setVibe] = useState('good');

  const emitSetValue = useCallback(
    (nextValue: number[]) => {
      onChange(set(nextValue[0]));
    },
    [onChange]
  );

  const debouncedSliderChange = useMemo(
    () => debounce(emitSetValue, 100),
    [emitSetValue]
  );

  const handleRangeSliderChange = useCallback(
    (sliderValue: number[]) => {
      let value = sliderValue[0];

      if (value > 8) {
        setVibe('great');
      }

      if (value >= 6 && value <= 8) {
        setVibe('good');
      }

      if (value == 5) {
        setVibe('ok');
      }

      if (value < 5 && value > 1) {
        setVibe('not-good');
      }

      if (value == 1) {
        setVibe('real-bad');
      }

      setRangeValue(sliderValue);
      debouncedSliderChange(sliderValue);
    },
    [debouncedSliderChange, setRangeValue]
  );

  const commitChange = () => {
    onChange(set(rangeValue[0]));
  };

  return (
    <Flex>
      <Stack space={2} flex={1}>
        <Slider.Root
          className="SliderRoot"
          value={rangeValue}
          max={10}
          step={1}
          minStepsBetweenThumbs={1}
          onValueChange={handleRangeSliderChange}
          onValueCommit={commitChange}>
          <Slider.Track className="SliderTrack">
            <Slider.Range className={`SliderRange ${vibe}`} />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" aria-label="Rating" />
        </Slider.Root>
        <Flex>{rangeValue[0]}</Flex>
      </Stack>
    </Flex>
  );
};

export default CustomSliderInput;
