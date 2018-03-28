Jepretgram - an I*stagram by Hacktiv8 Students.
----

**Basic Features:**

- Login & Register
- View all photo
- Share photo with caption (for auth users)
- Edit caption (for auth users)
- Delete photo (for auth users)
- Leave comment
- ❤️ photos

**REST - API**

List of basic routes:

|Routes					| HTTP			| Description
|---						| ---			| ---
| jepret/signup			| POST			| Sign up with new user info
| jepret/signin			| POST			| Sign in while get an access token
|							|				| based on credentials
| jepret/					| GET			| get all photos
| jepret/add				| POST			| upload new photo
| jepret/edit/:id		| PATCH		| update photo caption
| jepret/delete/:id		| DELETE		| delete specific photo

**Usage with only npm:**

**npm install npm start npm run dev**

access the website via http://localhost:3000 or API via http://localhost:3000/api