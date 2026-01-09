// API Configuration
// Automatically uses the correct API URL based on environment

/**
 * Get the base API URL based on the environment
 * - In production: uses VITE_API_URL environment variable
 * - In development: uses empty string (relies on Vite proxy)
 */
export function getApiBaseUrl(): string {
    // In production, use the environment variable
    // In development, return empty string to use Vite's proxy
    const apiUrl = import.meta.env.VITE_API_URL;

    if (apiUrl) {
        // Remove trailing slash if present
        return apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
    }

    // Development mode - use Vite proxy (empty string means relative URLs)
    return '';
}

/**
 * Helper function to make authenticated API requests
 */
export async function apiRequest(
    endpoint: string,
    options: RequestInit = {}
): Promise<Response> {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;

    return fetch(url, options);
}
