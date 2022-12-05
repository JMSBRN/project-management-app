import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        'no-internet-connect-msg': 'No internet... Please check this..',
        header: {
          'sign-in': 'sign in',
          'sign-up': 'sign up',
          'go-to-boards': 'go to boards',
          'sign-out': 'sign out',
          'new-board': 'new board',
          'edit-profile': 'edit profile',
        },
        main: {
          welcome: {
            'task-manager': 'Task manager',
            'task-description': `This is a task management application for any work needs. Accelerate teamwork with the ability to create and manage boards for any task. Simplify complex projects by breaking them down into levels of subtasks. Visualize your tasks and easily change their order.`,
            team: {
              'team-title': 'Team',
              'team-member-1': 'Aleksandr Zakhavai',
              'team-member-2': 'Alexey Shishkov',
              'team-member-3': 'Maria Gavrilova',
            },
          },
          auth: {
            'registration-success-msg': 'Registration Successful! Try Sign in please',
            'go-to-Sign-in-btn': 'go to Sign in',
            'sign-in-title': 'sign in Form',
            'sign-in': 'sign in Form',
            'sign-up': 'sign up Form',
            'edit-profile': 'edit profile form',
            'login-': 'login',
            'password-': 'password',
            'name-': 'name',
            'name-input-required': 'Enter your name',
            'name-input-msg-length': 'name must be more than one letter A-z',
            'name-input-msg-pattern': 'name must be more than one letter',
            'login-input-required': 'Enter your login',
            'login-input-msg-length': 'name must be more than one letter A-z',
            'password-input-required': 'Enter your password',
            'password-input-msg-length': 'Password cannot be shorter than 7 characters',
            'submit-btn': 'Submit',
            'delete-user-btn': 'Delete User',
          },
          boardForm: {
            title: 'Title',
            'title-input-required': 'enter title',
            description: 'Description',
            'description-input-required': 'enter description',
            'submit-btn': 'Submit',
          },
          columnForm: {
            title: 'Title',
            'title-input-required': 'enter title',
            'submit-btn': 'Submit',
          },
          modalDelete: {
            delete: 'Delete?',
            cansel: 'Cansel',
          },
          taskForm: {
            title: 'Title',
            'title-input-required': 'enter title',
            'title-input-msg-length': 'title cannot be more than 30 words',
            description: 'Description',
            'description-input-required': 'enter description',
            'description-input-msg-length': 'description cannot be more than 182 words',
            'submit-btn': 'Submit',
          },
        },
      },
    },
    ru: {
      translation: {
        'no-internet-connect-msg': 'Нет соединения с интернетом... Пожалуйста, проверьте..',
        header: {
          'sign-in': 'Войти',
          'sign-up': 'Регистрация',
          'go-to-boards': 'К доскам',
          'sign-out': 'Выйти',
          'new-board': 'Создать доску',
          'edit-profile': 'Ред. профиль',
        },
        main: {
          welcome: {
            'task-manager': 'Диспетчер задач',
            'task-description': `Это приложение для управления задачами для любых рабочих нужд. Ускорьте командную работу благодаря возможности создавать доски и управлять ими для любых задач. Упростите сложные проекты, разбив их на уровни подзадач. Визуализируйте свои задачи и легко меняйте их порядок.`,
            team: {
              'team-title': 'Команда',
              'team-member-1': 'Александр Захавай',
              'team-member-2': 'Алексей Шишков',
              'team-member-3': 'Мария Гаврилова',
            },
          },
          auth: {
            'registration-success-msg': 'Регистрация завершена успешна. Входите, пожалуйста',
            'go-to-Sign-in-btn': 'Войти',
            'sign-in-title': 'Войти',
            'sign-in': 'Войти',
            'sign-up': 'Регистрация',
            'edit-profile': 'Редактировать',
            'login-': 'Логин',
            'password-': 'Пароль',
            'name-': 'Имя',
            'name-input-required': 'Введите ваше имя',
            'name-input-msg-length': 'Имя должно быть длиннее 1 буквы A-z',
            'name-input-msg-pattern': 'Имя должно быть длиннее 1 буквы',
            'login-input-required': 'Введите логин',
            'login-input-msg-length': 'Логин должен быть длиннее 1 буквы A-z',
            'password-input-required': 'Введите пароль',
            'password-input-msg-length': 'Пароль должен содержать не менее 7 символов',
            'submit-btn': 'Отправить',
            'delete-user-btn': 'Удалить пользователя',
          },
          boardForm: {
            title: 'Название',
            'title-input-required': 'Введите название',
            description: 'Описание',
            'description-input-required': 'Введите описание',
            'submit-btn': 'Добавить',
          },
          columnForm: {
            title: 'Название',
            'title-input-required': 'Введите название',
            'submit-btn': 'Добавить',
          },
          modalDelete: {
            delete: 'Удалить?',
            cansel: 'Завершить',
          },
          taskForm: {
            title: 'Название',
            'title-input-required': 'Введите название',
            'title-input-msg-length': 'Название не может содержать больше 30 слов',
            description: 'Описание',
            'description-input-required': 'Введите описание',
            'description-input-msg-length': 'Описание не может содержать больше 182 слов',
            'submit-btn': 'Добавить',
          },
        },
      },
    },
  },
});

export default i18n;
