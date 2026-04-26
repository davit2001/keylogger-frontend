export const MAX_RETRIES = 3;

export async function withRetries<T>(
  fn: () => Promise<T>,
  maxRetries: number = MAX_RETRIES,
  label = "request"
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      const result = await fn();
      if (attempt > 1) {
        console.info(`[retry] ${label} succeeded on attempt ${attempt}`);
      }
      return result;
    } catch (err) {
      lastError = err;
      console.warn(
        `[retry] ${label} failed on attempt ${attempt}/${maxRetries + 1}`,
        err
      );
    }
  }
  console.error(
    `[retry] ${label} exhausted ${maxRetries + 1} attempts`,
    lastError
  );
  throw lastError;
}
