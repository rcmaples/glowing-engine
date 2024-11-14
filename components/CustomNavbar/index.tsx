import { NavbarProps } from 'sanity';
import { Stack } from '@sanity/ui';
import { NyanCat } from '../NyanCat';

export default function CustomNavbar(props: NavbarProps) {
  return (
    <Stack>
      {props.renderDefault(props)} {/* Render the default navbar */}
      <NyanCat />
    </Stack>
  );
}
