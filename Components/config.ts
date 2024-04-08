// config.ts
require('dotenv').config()

export const openSeaApiKey = process.env.OSAPIKey || '';
export const ThirdWebAPI = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || '';

export const PRIVATE_KEY = process.env.MMPRIVATE_KEY || '';