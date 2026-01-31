# NomadSplit Styling and Design Guide

This document outlines the design system, color palette, typography, and styling conventions used throughout the NomadSplit mobile application.

## Design Philosophy

NomadSplit uses a **nature-themed design** that evokes travel, adventure, and the outdoors. The design is:
- **Clean and modern**: Minimalist approach with clear visual hierarchy
- **Consistent**: Uniform styling across all screens and components
- **Accessible**: High contrast ratios and readable typography
- **Mobile-first**: Optimized for touch interactions and mobile devices

## Color Palette

### Primary Colors
```javascript
{
  primaryGreen: '#2E7D32',      // Main brand color - deep green
  secondaryGreen: '#558B2F',    // Accent green for gradients
  lightGreen: '#689F38',        // Lighter green for highlights
}
```

### Neutral Colors
```javascript
{
  white: '#FFFFFF',             // Card backgrounds, button text
  offWhite: '#F5F5F5',          // Input backgrounds
  lightGray: '#E0E0E0',         // Borders
  mediumGray: '#9E9E9E',        // Placeholder text
  darkGray: '#757575',          // Secondary text
  charcoal: '#424242',          // Labels and tertiary text
  black: '#212121',             // Primary text
}
```

### Gradients
The app uses linear gradients for background emphasis:
```javascript
// Primary gradient (used on auth screens)
colors: ['#2E7D32', '#558B2F', '#689F38']
start: { x: 0, y: 0 }
end: { x: 1, y: 1 }
```

## Typography

### Font Sizes
```javascript
{
  logo: 48,           // Large decorative text/emojis
  title: 28,          // Page titles (e.g., "Create Account")
  subtitle: 14,       // Descriptive text below titles
  body: 16,           // Input fields, standard text
  label: 14,          // Input labels
  button: 16-18,      // Button text
}
```

### Font Weights
```javascript
{
  regular: '400',     // Body text, subtitles
  semibold: '600',    // Buttons, labels
  bold: '700',        // Titles
}
```

## Spacing System

Following an 8-point grid system:
```javascript
{
  xs: 8,              // Small gaps
  sm: 12,             // Input field gaps
  md: 16,             // Button padding vertical
  lg: 20,             // Input margins
  xl: 24,             // Section spacing
  xxl: 32,            // Card padding
  xxxl: 40,           // Scroll container padding
}
```

## Component Styles

### Buttons

#### Primary Button (Call-to-action)
```javascript
{
  backgroundColor: '#2E7D32',     // Green background
  color: '#FFFFFF',               // White text
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 12,
  fontWeight: '600',
  fontSize: 16-18,
  // Shadow for depth
  shadowColor: '#2E7D32',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 4,
}
```

#### Secondary Button (Alternative action)
```javascript
{
  backgroundColor: 'transparent',  // No background
  borderWidth: 2,
  borderColor: '#FFFFFF',          // White border
  color: '#FFFFFF',                // White text
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 12,
  fontWeight: '600',
  fontSize: 18,
}
```

#### Tertiary Button (Sign out, links)
```javascript
{
  backgroundColor: 'transparent',
  borderWidth: 2,
  borderColor: '#2E7D32',         // Green border
  color: '#2E7D32',               // Green text
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 12,
  fontWeight: '600',
  fontSize: 16,
}
```

### Input Fields
```javascript
{
  backgroundColor: '#F5F5F5',     // Light gray background
  borderRadius: 12,
  paddingVertical: 14,
  paddingHorizontal: 16,
  fontSize: 16,
  color: '#212121',               // Dark text
  borderWidth: 1,
  borderColor: '#E0E0E0',         // Subtle border
}
```

### Cards
```javascript
{
  backgroundColor: '#FFFFFF',
  borderRadius: 24,               // Large radius for modern feel
  padding: 32,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 12,
  elevation: 5,
}
```

### Labels
```javascript
{
  fontSize: 14,
  fontWeight: '600',
  color: '#424242',               // Charcoal
  marginBottom: 8,
}
```

## Layout Patterns

### Authentication Screens (Sign In, Sign Up)
```
┌─────────────────────────────┐
│    Gradient Background      │
│                             │
│  ┌───────────────────────┐  │
│  │    White Card         │  │
│  │                       │  │
│  │  🌿 Logo              │  │
│  │  Title                │  │
│  │  Subtitle             │  │
│  │                       │  │
│  │  [Input Fields]       │  │
│  │                       │  │
│  │  [Primary Button]     │  │
│  │                       │  │
│  │  Footer Link          │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

### Landing Page
```
┌─────────────────────────────┐
│    Gradient Background      │
│                             │
│         🌿                  │
│      NomadSplit             │
│   Split expenses,           │
│   share adventures          │
│                             │
│                             │
│   [Get Started Button]      │
│   [Sign In Button]          │
│                             │
└─────────────────────────────┘
```

## Icons and Branding

### Logo
- **Type**: Text-based with emoji icon
- **Icon**: 🌿 (Herb/leaf emoji)
- **Text**: "NomadSplit"
- **Font Size**: 48px for logo
- **Color**: White on gradient backgrounds

### Emoji Usage
Emojis are used sparingly for visual interest:
- 🌿 - App logo/branding
- Can be expanded for expense categories (e.g., 🍔 Food, ✈️ Travel)

## Responsive Design

### Breakpoints
While mobile-first, components are designed to scale:
```javascript
const { width, height } = Dimensions.get('window')

// Maximum card width for tablets
maxWidth: 440

// Responsive top padding
paddingTop: height * 0.2  // 20% of screen height
```

## Accessibility Considerations

1. **Color Contrast**: All text meets WCAG AA standards
   - White on green: 4.5:1 ratio
   - Dark text on white: 7:1 ratio

2. **Touch Targets**: All buttons have minimum 44px height

3. **Keyboard Handling**: Forms use `KeyboardAvoidingView` for better UX

4. **Placeholder Text**: Sufficient contrast (#9E9E9E on #F5F5F5)

## Implementation Notes

### Using StyleSheet
All styles are implemented using React Native's `StyleSheet.create()` for:
- Performance optimization
- Type safety (with TypeScript)
- Style validation

### Example Usage
```javascript
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
})
```

## Future Enhancements

### Potential Additions
1. **Dark Mode**: Inverse color scheme with dark backgrounds
2. **Theme Provider**: Global theme context for easy customization
3. **Animation**: Subtle transitions for button presses and screen changes
4. **Custom Fonts**: Replace system fonts with brand-specific typefaces
5. **Utility Classes**: Consider NativeWind (Tailwind for React Native) for faster styling

## Design Consistency Checklist

When creating new components, ensure:
- [ ] Colors match the defined palette
- [ ] Typography follows the size/weight hierarchy
- [ ] Spacing uses the 8-point grid
- [ ] Border radius is consistent (12px for buttons/inputs, 24px for cards)
- [ ] Shadows follow the elevation system
- [ ] Touch targets are at least 44px tall
- [ ] Code includes clear comments explaining purpose
