import { createTamagui } from 'tamagui'
import { themes } from './themes'
import { defaultConfig } from '@tamagui/config/v5'

export const config = createTamagui({
  ...defaultConfig,
  themes,
})