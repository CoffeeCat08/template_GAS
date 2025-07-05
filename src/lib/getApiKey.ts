export function getApiKey(): string {
  const apiKey = PropertiesService.getScriptProperties().getProperty('API_KEY');
  if (!apiKey) {
    throw new Error();
  }

  return apiKey;
}
