export function processEvent(event: string | null): string {
  if (!event) {
    return "Empty event";
  }

  return `Processing event: ${event}`;
}