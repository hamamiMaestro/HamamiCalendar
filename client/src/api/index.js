import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
const url = 'http://localhost:5000';
const url_tasks =   'http://localhost:5000/tasks';

// For the middleware
API.interceptors.request.use((request) => {
    if (localStorage.getItem('profile')) {
        request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return request;
  });

// Basic CRUD
// export const fetchTasks = () => axios.get(url_tasks);
// export const createTask = (newTask) => axios.post(url_tasks, newTask);
// export const updateTask  = (id, updatedTask) => axios.patch(`${url_tasks}/${id}`, updatedTask);
// export const deleteTask =  (id) => axios.delete(`${url_tasks}/${id}`);
export const fetchTasks = () => API.get('/tasks');
export const createTask = (newTask) => API.post('/tasks',newTask);
export const updateTask = (id, updatedTask) => API.patch(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);




// Auth
// export const signIn = (formData) => axios.post(`${url}/user/signin`, formData);
// export const signUp = (formData) => axios.post(`${url}/user/signup`, formData);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// Advanced
// export const deleteRepeatedTasks =  (group) => axios.delete(`${url_tasks}/repeated/${group}`);
// export const createRepeatedTasks = (newTasks) => axios.post(`${url_tasks}/repeated`, newTasks);

export const deleteRepeatedTasks =  (group) => API.delete(`/tasks/repeated/${group}`);
export const createRepeatedTasks = (newTasks) => API.post(`/tasks/repeated`, newTasks);

export const getTasksByDay = (startDate) => axios.get(`${url_tasks}/day/${startDate}`);
export const getTasksByDayAndHour = (startDate, startTime) => axios.get(`${url_tasks}/day/${startDate}/hour/${startTime}`);
export const getWeekTasks = (startDate) => axios.get(`${url_tasks}/week/${startDate}`);

export const getTasksByDayOfUser = (startDate) => API.get(`/tasks/day/${startDate}`);
export const getTasksByDayAndHourOfUser = (startDate, startTime) => API.get(`/tasks/day/${startDate}/hour/${startTime}`);
export const getWeekTasksOfUser = (startDate) => API.get(`/tasks/week/${startDate}`);

// export const getTasksByDayOfUser = (startDate) => axios.get(`${url_tasks}/day/${startDate}`);
// export const getTasksByDayAndHourOfUser = (startDate, startTime) => axios.get(`${url_tasks}/day/${startDate}/hour/${startTime}`);
// export const getWeekTasksOfUser = (startDate) => axios.get(`${url_tasks}/week/${startDate}`);



// export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);