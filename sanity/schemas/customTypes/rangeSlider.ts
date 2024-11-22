import { defineType } from 'sanity';

import CustomSliderInput from '@/components/CustomSliderInput';

/**
 * @public
 */
export const sliderTypeName = 'rangeSlider' as const;

export const slider = defineType({
  name: sliderTypeName,
  type: 'number',
  components: {
    input: CustomSliderInput,
  },
});
