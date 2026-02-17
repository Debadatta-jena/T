import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_URL}/auth/refresh`, {
            refreshToken,
          });
          
          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;

export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  
  register: (userData: { name: string; email: string; password: string; role?: string }) =>
    api.post('/auth/register', userData),
  
  refresh: (refreshToken: string) =>
    api.post('/auth/refresh', { refreshToken }),
  
  logout: () =>
    api.post('/auth/logout'),
  
  getProfile: () =>
    api.get('/auth/profile'),
};

export const contactAPI = {
  submit: (data: { name: string; email: string; phone: string; message: string }) =>
    api.post('/contact', data),
  
  getMessages: () =>
    api.get('/contact'),
};

export const projectsAPI = {
  getAll: () =>
    api.get('/projects'),
  
  getById: (id: string) =>
    api.get(`/projects/${id}`),
  
  create: (data: FormData) =>
    api.post('/projects', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  
  update: (id: string, data: FormData) =>
    api.put(`/projects/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  
  delete: (id: string) =>
    api.delete(`/projects/${id}`),
};

export const testimonialsAPI = {
  getAll: () =>
    api.get('/testimonials'),
  
  create: (data: { name: string; email: string; message: string; rating: number }) =>
    api.post('/testimonials', data),
  
  approve: (id: string) =>
    api.patch(`/testimonials/${id}/approve`),
  
  delete: (id: string) =>
    api.delete(`/testimonials/${id}`),
};

export const statsAPI = {
  get: () =>
    api.get('/stats'),
  
  update: (data: any) =>
    api.put('/stats', data),
};

export const clientsAPI = {
  getAll: () =>
    api.get('/clients'),
  
  getById: (id: string) =>
    api.get(`/clients/${id}`),
  
  create: (data: any) =>
    api.post('/clients', data),
  
  update: (id: string, data: any) =>
    api.put(`/clients/${id}`, data),
  
  delete: (id: string) =>
    api.delete(`/clients/${id}`),
};

