// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIBase: 'https://localhost:5001/api',
  Auth: {
    Student: '/Auth/Student',
    CourseAdviser: '/Auth/CourseAdviser',
    ItAdministrator: '/Auth/ItAdministrator',
    HeadOfDepartment: '/Auth/HeadOfDepartment',
    Dean: '/Auth/Dean',
    Admin: '/Auth/Admin',
    SuperAdmin: '/Auth/SuperAdmin',
    Signin: '/Auth/Signin',
  },
  User: {
    GetAuthenticatedUser: '/User/GetAuthenticatedUser/',
    GetUsers: '/User/GetUsers/',
    GetCourseAdvisers: '/User/GetCourseAdvisers/',
    GetDeans: '/User/GetDeans/',
    GetStudents: '/User/GetStudents/',
    GetHeadOfDepartments: '/User/GetHeadOfDepartments/',
    GetUserByUserName: '/User/GetUserByUserName/',
    GetUserById: '/User/GetUserById/',
    GetUsersCount: '/User/GetUsersCount/',
    GetUserRoleByUserName: '/User/GetUserRoleByUserName/',
    GetUserRoleByEmail: '/User/GetUserRoleByEmail/',
  },
  Subject: {
    GetSubjects: '/Subject/GetSubjects/',
    AddDepartmentSubjects: '/Subject/AddDepartmentSubjects/',
    GetSubjectsCount: '/Subject/GetSubjectsCount/',
    GetSubjectById: '/Subject/GetSubjectById/',
    GetSubjectsOfDepartment: '/Subject/GetSubjectsOfDepartment/',
    AddSubject: '/Subject/CreateSubject/',
    DeleteSubjectById: '/Subject/DeleteSubjectById/',
  },
  Result: {
    GetResults: '/Result/GetResults/',
    GetResultsCount: '/Result/GetResultsCount/',
    GetResultById: '/Result/GetResultById/',
    AddResult: '/Result/CreateResult/',
    DeleteResultById: '/Result/DeleteResultById/',
  },
  Faculty: {
    GetFaculties: '/Faculty/GetFaculties/',
    GetFacultiesCount: '/Faculty/GetFacultiesCount/',
    GetFacultyById: '/Faculty/GetFacultyById/',
    AddFaculty: '/Faculty/CreateFaculty/',
    DeleteFacultyById: '/Faculty/DeleteFacultyById/',
  },
  Department: {
    GetDepartments: '/Department/GetDepartments/',
    GetDepartmentsCount: '/Department/GetDepartmentsCount/',
    AddFacultyDepartments: '/Department/AddFacultyDepartments/',
    GetDepartmentsOfFaculty: '/Department/GetDepartmentsOfFaculty/',
    GetDepartmentById: '/Department/GetDepartmentById/',
    AddDepartment: '/Department/CreateDepartment/',
    DeleteDepartmentById: '/Department/DeleteDepartmentById/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
