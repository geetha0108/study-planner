// API Configuration
// Automatically uses the correct API URL based on environment

/**
 * Get the base API URL based on the environment
 * - In production: uses hardcoded production URL (works for static site builds)
 * - In development: uses empty string (relies on Vite proxy)
 */
export function getApiBaseUrl(): string {
    // Runtime detection avoids build-time environment variable issues for static sites
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

    if (isLocalhost) {
        // Development mode - use Vite proxy (empty string means relative URLs)
        return '';
    }

    // Production mode - use the Render backend URL
    // We use this fallback instead of relying solely on env vars which can be tricky with static builds
    return 'https://study-planner-adapta.onrender.com';
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
