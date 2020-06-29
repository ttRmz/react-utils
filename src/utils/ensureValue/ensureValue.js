export function ensureValue(value, fallback = null) {
  return value === undefined || value == null || Number.isNaN(value)
    ? fallback
    : value
}
