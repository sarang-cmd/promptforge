/**
 * Extracts all unique variables from a prompt string.
 * Variables are defined using the {{variable_name}} syntax.
 */
export function extractVariables(prompt: string): string[] {
  const regex = /\{\{([a-zA-Z0-9_-]+)\}\}/g;
  const matches = prompt.matchAll(regex);
  const variables = new Set<string>();

  for (const match of matches) {
    if (match[1]) {
      variables.add(match[1]);
    }
  }

  return Array.from(variables);
}

/**
 * Replaces all variables in a prompt with their provided values.
 */
export function resolveVariables(prompt: string, values: Record<string, string>): string {
  let resolved = prompt;
  
  for (const [key, value] of Object.entries(values)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    resolved = resolved.replace(regex, value);
  }
  
  return resolved;
}
