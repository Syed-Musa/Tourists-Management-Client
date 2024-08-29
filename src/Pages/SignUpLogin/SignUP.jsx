import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser, update, googleSignIn} = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassWord] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        setErrorMessage(null);
        setSuccess(null);
        if (password.length > 6) {
            setErrorMessage('Password should have at least 6 character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password should have at least one uppercase');
            return;
        }

        createUser(email,password)
        .then(res => {
            console.log(res.user)
            update(name,photo)
            .then()
            .catch()

            const createdAt = res.user?.metadata?.creationTime;
            const lastLoginAt = res.user?.metadata?.lastLoginAt;
            const user = {email, createdAt: createdAt, lastLoginAt:lastLoginAt};
            fetch('http://localhost:5000/user',{
                method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User added to the database',
                    showConfirmButton: false,
                    timer: 1500
                })
                }
            })
        })
        .catch(error =>{
            console.error(error);
        })
    };

    const handleGoogle =()=>{
        googleSignIn()
        .then(res => {
            console.log(res.user)
            Swal.fire({
              title: 'Your account have been created.',
              width: 600,
              padding: '3em',
              color: '#716add',
              background: '#fff url(/images/trees.png)',
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            })

           navigate('/')
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen bg-[url('https://i.ibb.co/MGFNk2D/Kolsay.jpg')] bg-cover">
                <div className="hero-content flex-col">

                    <div className="card bg-base-100 w-full bg-[url('https://i.ibb.co/MGFNk2D/Kolsay.jpg')] max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegistration} className="card-body">
                            <h2 className="text-3xl font-bold text-center uppercase text-white">Sign Up Now</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic text-white">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-serif italic">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <span className="absolute text-2xl top-[305px] right-10" onClick={() => setShowPassWord(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic text-white">PhotoURL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="photoURL"
                                    className="input input-bordered"
                                    required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-teal-500 font-bold uppercase text-white hover:text-teal-500 hover:bg-white">Sign Up</button>
                            </div>

                            <div className="text-center">
                                <p className="font-serif text-white">Go to <Link className="text-sky-300 font-bold uppercase" to='/login'>Login</Link> Page</p>
                            </div>
                        <button onClick={handleGoogle} className="btn w-full text-black hover:text-white hover:bg-black font-serif font-bold py-2 flex items-center justify-center gap-3 px-4 rounded-md mt-4"><FaGoogle className="text-2xl text-orange-400"></FaGoogle> Continue With Google</button>
                        </form>
                        {
                            errorMessage && <p className="text-red-600 italic font-bold mb-10 text-center">{errorMessage}</p>
                        }
                        {
                            success && <p className="text-green-600 italic font-bold mb-10 text-center">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;