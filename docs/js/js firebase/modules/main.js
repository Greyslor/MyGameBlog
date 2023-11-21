import { app } from "./config-app.js";
import { firebaseCRUD } from "./crud.js";
import { authEmail } from "./auth-email.js";
import { authGitHub } from "./auth-github.js";
import { authGoogle } from "./auth-google.js";
import { authMicrosoft } from "./auth-microsoft.js"; 
import { firebaseStorage } from "./storage.js";


firebaseCRUD(app);
authEmail(app);
authGitHub(app);
authGoogle(app);
authMicrosoft(app);
firebaseStorage(app);