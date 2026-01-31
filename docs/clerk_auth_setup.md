# Clerk Authentication Setup

This document outlines the Clerk authentication setup for the NomadSplit mobile application.

## Overview

We use [Clerk](https://clerk.com/) for user authentication. The integration is managed via `@clerk/clerk-expo` and is integrated into the Expo Router file system routing.

## Implementation Details

### 1. Root Provider Setup
The `RootLayout` (`apps/mobile/app/_layout.tsx`) is the entry point of the application. It wraps the entire navigation tree with:
- `ClerkProvider`: Provides the authentication context.
- `ClerkLoaded`: Ensures Clerk is initialized before any UI is rendered.

### 2. Token Caching
To persist user sessions across app restarts, we use `expo-secure-store` as the token cache. This is configured in the `tokenCache` object within the root layout.

### 3. Route Guarding
We use a separate layout for the authentication flow in `apps/mobile/app/(auth)/_layout.tsx`.
- **Signed-in users:** If a user is already authenticated and attempts to access any route within the `(auth)` group (e.g., `/sign-in`), they are automatically redirected to the home page (`/`). This prevents redundant login screens and improves the user experience.

### 4. Environment Variables
The setup requires the following environment variable:
- `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY`: Found in the Clerk Dashboard.

## Authorized Sign-In Methods

Currently, we are focusing on the following methods:
- **Email/Password:** Standard authentication.
- **OAuth Providers:** Google and Apple are the intended OAuth providers.
