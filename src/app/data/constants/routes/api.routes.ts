import { environment as ENV } from '@env/environment';

export const API_ROUTES = {
    AUTH: {
        LOGIN : `${ENV.url}/auth/login`,
    },
}