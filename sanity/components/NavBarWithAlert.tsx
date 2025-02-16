import React from 'react';
import { Stack, Card, Flex, Text } from '@sanity/ui';
import type { NavbarProps } from 'sanity';

import '../tailwind.css';

export const NavBarWithAlert = (props: NavbarProps) => {
  return (
    <Stack>
      <Card>
        <div className="bg-red-500 p-3">
          <Flex justify="center">
            <Text>
              <span className="text-lg font-bold text-white">
                NavBarWithAlert
              </span>
            </Text>
          </Flex>
        </div>
      </Card>
      {props.renderDefault(props)}
    </Stack>
  );
};
