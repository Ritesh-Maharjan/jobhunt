# jobhunt

> Project is about job seeker that can apply jobs and company posting jobs. 
<hr>

# Functionality of the project

* Admin can delete jobs and users
* Company can create, edit, update and delete jobs
* Job Seeker can apply jobs, see all the application to the jobs they applied.
* Company and Job seeker can delete their profile
* Admin, Company and Job seeker can update their profile.
* Basic search funcitonality for the jobs, and when logged in as company they can see all the job postings from them

# Struggles when creating this project

* Struggled with creating search functionality in the get all jobs api.
* Struggled with setting up the multer as it was not locating the correct file. Figured out the mistake was adding / first when defining the location of the images.
* Struggled with getting all jobs when the user is logged in, it worked fine when the user was admin or job seeker but not when company. Fixed it by making a API query in else condition if the users is logged in and is not admin.
* Struggled with sending post request to apply for job as i was not sending empty body and was sending token which replaced the body and the error was being throw that the user was not authenticated. Fixed it by adding empty body to the request.
* Struggled with z-index as it was not over the main content. Figured out the problem was the main div overrides the z-index which defaulted to 0 and the menu was being under main contents.
* Struggled closing menu when clicking outside the menu. Figured out needed to useRef hooks to check whether element was matching with it. Also had problem with the menu not being clicked as it was hidden before we click the link. In order to fix it had to first check whether the menu was open or not.
* Struggled with Formik initialvalues not being displayed on forms when fetching data from API. Was not working with enableReinitialize at first so had values changed of field dirrectly using initialValues.fieldname which updated the form but user was not able to change it. Later tried the enableReinitialize again due to multiple suggestions found in stackoverflow. Worked perfectly afterwards.
