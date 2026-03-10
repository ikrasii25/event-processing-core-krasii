export function validateEvent(event: string | null): boolean {
  if (event === null || event === "") {
    return false;
  }

  return true;
}