<!--
  When editing this file keep in mind to:
  * Prefer clear English sentences to short abbreviations.
  * Keep the sections sorted in the same order:
    1. 🚨 Breaking changes
    2. ✨ Enhancements
    3. 🐛 Bug fixes
    4. 📝 Documentation
  * Put all unreleased changes in the top level "Unreleased" section.
-->

# Changelog

All notable changes to this project will be documented here.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

### ✨ Enhancements

- Create `ensureValue` util.

## 2.0.0 (June 22, 2020)

### 🚨 Breaking changes

- `useEventListener` : element parameter has been replaced by options. Set the targeted element into options object parameter instead.

```diff
  useEventListener(
    "click",
    () => {},
-   element
+   { element }
  )
```

### ✨ Enhancements

- `useEventListener` : implement debounce interval option
- Create `useCursorPosition` hook.
- Create `debounce` util.
- Create `useWatchPosition` hook.

## 1.5.1 (June 19, 2020)

### 🐛 Bug fixes

- useEffect dependencies in `useEventListener`
- useEffect dependencies in `useTimeout`

### 📝 Documentation

- Create a `Storybook`. [link here](https://ttrmz.github.io/react-utils)

## 1.5.0 (June 18, 2020)

### ✨ Enhancements

- Create `useOnClickOutside` hook.
- Create `useTimeout` hook.
- Create `copyToClipboard` util.
- Create `useCopyToClipboard` hook.

## 1.4.0 (June 15, 2020)

### ✨ Enhancements

- Create `isPromise` util.
- Create `stopEvent` util.
- Create `useInterval` hook.
- Create `useTimeLeft` hook.

## 1.3.0 (June 11, 2020)

### ✨ Enhancements

- Create `useDebounce` hook.

## 1.2.0 (June 8, 2020)

### ✨ Enhancements

- Create `useEventListener` hook.
- Create `useLockBodyScroll` hook.

## 1.1.0 (June 5, 2020)

### ✨ Enhancements

- Create `useLocalStorage` hook.

## 1.0.0 (May 13, 2020)

### ✨ Enhancements

- Create `useInput` hook.
