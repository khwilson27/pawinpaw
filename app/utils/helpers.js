// Include the Axios library for HTTP requests
import axios from "axios";


// Helper Functions
const helpers = {

    //SignUp New User
    regNewuser(email, password) {
        const newUser = { email, password };
        return axios.post("/api/register", newUser)
            .then((response) => {
                console.log(response);
                return response;
            });
    },

    //User LogIn
    userLogin(email, password) {
        const loggingUser = { email, password };
        return axios.post("/api/login", loggingUser)
            .then((response) => {
                console.log(response);
                return response;
            });
    },
<<<<<<< HEAD
    // Edit user's info
=======
>>>>>>> a36f6e7fbe6ec3d4ea54d09f6a6e0f644ca877fa
    userData(data) {
        console.log(data)
        return axios.put("/api/profile", data)
    },
    //Find Nearby 
    findNear(zipcode, email) {
        axios.get('/api/users/nearby', {
            params: {
                zipcode,
                email
            }
        })
            .then((response) => {
                console.log(response);
                return response;
            });
    },
    // Uploads an image to cloudinary
    cloudinaryUpload(image) {
        const url = "https://api.cloudinary.com/v1_1/khwilsoncloudinary/image/upload";
        const uploadPreset = 'bohjunrg';

        const fd = new FormData();
        fd.append("upload_preset", uploadPreset);
        fd.append("file", image);

        const config = {
            headers: { "X-Requested-With": "XMLHttpRequest" }
        };

        axios.post(url, fd, config)
            .then(function (res) {
                // File uploaded successfully
                console.log(res.data);
            })
            .catch(function (err) {
                console.error('err', err);
            });

    },

    // Delete an image to cloudinary
    cloudinaryDelete (publicid) {
        const url = "https://api.cloudinary.com/v1_1/khwilsoncloudinary/resources/image/upload?public_ids[]="+publicid;

        axios.delete(url, config)
            .then(function (res) {
                // File deleted successfully
                console.log(res.data);
            })
            .catch(function (err) {
                console.error('err', err);
            });

    }

};


// We export the helpers function
export default helpers;