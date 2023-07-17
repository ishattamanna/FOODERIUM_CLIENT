import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import nullProfilePic from '../Assets/null-profile-pic.webp';
import useUploadingImage from '../hooks/useUploadingImage';
import { AuthContext } from '../Contexts/AuthProvider';

const SignUp = () => {

    const { createAccount, userProfileUpdate } = useContext(AuthContext)

    const inputRef = useRef();

    const [uploadingImage, setUploadingImage] = useState(null);

    const [err, setErr] = useState("");

    // console.log(uploadingImage);

    const { imgUrl } = useUploadingImage(uploadingImage);

    const handleCreateAccount = (event) => {
        event.preventDefault();
        setErr("");
        const form = event.target;

        const username = form.username.value;
        const profilePic = imgUrl;
        const email = form.email.value;
        const password = form.password.value;
        const cPassword = form.cPassword.value;

        if (password !== cPassword) {
            return setErr("Your password didn't match");
        }

        if (password.length < 6) {
            return setErr("Password must be contains at least 6 characters");
        }


        const userInfo = {
            username,
            profilePic,
            email,
            password,
            cPassword,
        };

        console.log(userInfo);

        createAccount(userInfo?.email, userInfo?.password)
            .then(data => {
                const user = data?.user
                console.log(user);
                handleUpdateProfile(userInfo?.username, userInfo?.profilePic)
            })
            .catch((err) => {
                console.error(err);
                setErr(err.message);
            });
    };

    const handleUpdateProfile = (userName, profilePic) => {
        userProfileUpdate(userName, profilePic)
            .then(() => { })
            .catch(err => console.error(err));
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/000/185/515/original/vector-creative-login-ui-template-form-design-with-technology-style-bac.jpg)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <form onSubmit={handleCreateAccount} className=" py-20 w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Create to your account</h2>
                    <div className="my-6 space-y-4">
                        <div onClick={() => inputRef.current.click()} className="avatar cursor-pointer">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={imgUrl || nullProfilePic} alt="Profile Pic" />
                            </div>
                        </div>
                        <input onChange={(event) => setUploadingImage(event.target.files[0])} ref={inputRef} className="hidden" type="file"></input>
                        <div className="space-y-2">
                            <label for="username" className="block text-sm text-start">User Name</label>
                            <input type="text" name="username" placeholder="User Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />


                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <div novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">

                            <div className="space-y-2">
                                <label for="email" className="block text-sm text-start">Email address</label>
                                <input type="email" name="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label for="password" className="text-sm">Password</label>

                                </div>
                                <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label for="cPassword" className="text-sm">Confirm Password</label>

                                </div>
                                <input type="password" name="cPassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                        </div>
                        {
                            err && <p className="font-bold text-red-600 text-start">{err}</p>
                        }
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Create Account</button>
                    </div>
                    <Link to={"/login"} className="text-xs hover:underline dark:text-gray-400">Already have an account? Log In</Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;