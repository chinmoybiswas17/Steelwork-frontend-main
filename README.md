# Alpha Steelwork

[Open portal to Alpha Steelworks world](https://manufacture-website-e599a.web.app/)


### Features of this application

[Homepage Screenshot](https://github.com/ThakurSaad/alpha-steelwork-frontend#homepage-screenshot)

1. Other than `Home`, `Blogs` and `Portfolio` route, every route is protected.
2. Admin route is specially protected with `RequireAdmin`
3. Even if some one hacks into the `makeAdmin`, he/she can not make user admin. Because other than admin, normal user/anyone is prevented to make someone admin from the api itself.
4. Upon login/signUp, a `jsonwebtoken` is issued from the server. Which is stored in the local Storage of the device the user has logged in/singed up from.
5. If the `accessToken` aka `jsonwebtoken` is expired(which is one hour) the user is automatically logged out from the application. And has to log in again to use the application.
6. `jsonwebtoken` 401 and 403 is also implemented.
7. `React Query` is used to manage most of the server states(GET api calls), as it makes life so much easier my giving extra states like `isLoading`, `refetch`, `error`. Also for ease of `cacheting`

### Technologies

- react js
- firebase
- react firebase hooks
- tailwind css
- daisyUI
- react router V6
- react fontAwesome
- react query
- react hook form
- react toastIfy
- stripe
- react swiper
- typeWriterJS
- react vertical timeline
- react count up
- react visibility sensor
- react inner image zoom


