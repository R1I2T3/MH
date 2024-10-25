export const API_ENDPOINTS = {
    QUERY: '/api/query',
    PROMPTS: '/api/prompts',
    USAGE: '/api/usage'
  };
  
  export const QUERY_LIMIT_PER_DAY = 20;
  
  export const ERROR_MESSAGES = {
    QUERY_LIMIT_EXCEEDED: 'Daily query limit exceeded. Please try again tomorrow.',
    INVALID_QUERY: 'Please enter a valid query.',
    SERVER_ERROR: 'Something went wrong. Please try again later.',
    NETWORK_ERROR: 'Network error. Please check your connection.'
  };