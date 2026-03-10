export function processEvent(event: string | null): string {
  if (!event) {
    return "Empty event";
  }

  const message = `[EVENT]: ${event}`;
  console.log(`Log event: ${event}`);

  return message;
}

export function logEvent(event: string) {
  console.log(`Log event: ${event}`);
}