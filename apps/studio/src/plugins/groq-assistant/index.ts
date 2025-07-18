import {SearchIcon} from '@sanity/icons'
import {definePlugin} from 'sanity'

import {GroqAssistantTool} from './GroqAssistant'

export const groqAssistant = definePlugin(() => {
  return {
    name: 'groq-assistant',
    tools: [
      {
        name: 'groq-assistant',
        title: 'GROQ Assistant',
        icon: SearchIcon,
        component: GroqAssistantTool,
      },
    ],
  }
})
