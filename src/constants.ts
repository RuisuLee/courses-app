export const LOGOUT_BUTTON_TEXT = 'Logout';

export const ADD_NEW_COURSE_BUTTON_TEXT = 'Add new course';

export const SEARCH_BAR_INPUT_LABEL_TEXT = 'Search course';
export const SEARCH_BAR_INPUT_PLACEHOLDER_TEXT = 'Enter course name...';
export const SEARCH_BUTTON_TEXT = 'Search';

export const COURSE_CARD_AUTHORS = 'Authors: ';
export const COURSE_CARD_DURATION = 'Duration: ';
export const COURSE_CARD_CREATED = 'Created: ';
export const SHOW_COURSE_BUTTON_TEXT = 'Show course';

export const CREATE_COURSE_TITLE_LABEL_TEXT = 'Title';
export const CREATE_COURSE_TITLE_PLACEHOLDER_TEXT = 'Enter title...';
export const CREATE_COURSE_BUTTON_TEXT = 'Create course';
export const CREATE_COURSE_DESCRIPTION_LABEL_TEXT = 'Description';
export const CREATE_COURSE_DESCRIPTION_PLACEHOLDER_TEXT = 'Enter description';
export const CREATE_COURSE_ADD_AUTHOR_TITLE = 'Add author';
export const CREATE_COURSE_ADD_AUTHOR_LABEL_TEXT = 'Author name';
export const CREATE_COURSE_ADD_AUTHOR_PLACEHOLDER_TEXT = 'Enter author name...';
export const CREATE_AUTHOR_BUTTON_TEXT = 'Create author';
export const CREATE_COURSE_DURATION_TITLE = 'Duration';
export const CREATE_COURSE_DURATION_PLACEHOLDER_TEXT =
  'Enter durstion in minutes...';
export const CREATE_COURSE_AUTHORS_LIST_TITLE = 'Authors';
export const ADD_AUTHOR_BUTTON_TEXT = 'Add author';
export const COURSE_AUTHORS_LIST_TITLE = 'Course authors';
export const COURSE_AUTHORS_LIST_IS_EMPTY = 'Author list is empty';
export const DELETE_AUTHOR_BUTTON_TEXT = 'Delete author';

const API_HOST = 'http://localhost:3000';
export const REGISTRATION_URL = API_HOST + '/register';
export const LOGIN_URL = API_HOST + '/login';
export const COURSES_URL = API_HOST + '/courses/all';
export const USER = API_HOST + '/users/me';
export const AUTHORS_URL = API_HOST + '/authors/all';
export const LOGOUT_URL = API_HOST + '/logout';

export const ROUTES = {
  default: '/',
  login: '/login',
  registration: '/registration',
  courses: '/courses',
  course: '/courses/:courseId',
  addCourse: '/courses/add',
};

export const USER_INFO = {
  name: 'userName',
  token: 'userToken',
};
