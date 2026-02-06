import { View, styled } from 'tamagui'

export const FormCard = styled(View, {
  flexDirection: 'row',
  maxW: '100%',
  borderRadius: 30,
  backgroundColor: '$background',
  $gtSm: {
    padding: '$6',
    shadowColor: '$shadowColor',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 5,
  },
  $xs: {
    borderWidth: 0,
    borderRadius: 0,
    paddingHorizontal: '$1',
  },
})
