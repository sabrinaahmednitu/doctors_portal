import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const Login = () => {
    // google hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    //login hook
    const [
      signInWithEmailAndPassword,
      user1,
      loading1,
      error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [token]=useToken(user || user1 );

    let signInError;
    const navigate=useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname || "/" ;

    useEffect(()=>{
      if (token) {
        navigate(from,{replace:true});
   }
    },[token, from, navigate])

    if( loading || loading1){
      return <Loading></Loading>
    }

    if(error || error1){
        signInError= <p className='text-red-500' >{error?.message || error1?.message }</p>
    }
     
    const onSubmit = data =>{ 
       //console.log(data);
       signInWithEmailAndPassword(data.email, data.password);
      }

    return (
         <div className='flex h-screen justify-center items-center ' >
            <div className="card w-96 bg-base-100 shadow-xl">
               <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                     {/* login form */}
                     <form onSubmit={handleSubmit(onSubmit)}>
                             {/* daisy ui input email*/}
                     <div className="form-control w-full max-w-xs">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input 
                             type="email" 
                             placeholder="email" 
                             className="input input-bordered w-full max-w-xs" 
                             {...register("email", {
                               required:{
                                value :true,
                                message:'Email is required'
                               },
                              pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email' 
                              }
                             }
                           )} 
                       />
                       <label className="label">
                       {errors.email?.type === 'required' && <p className='text-red-500' role="alert">{errors.email.message}</p>}
                       {errors.email?.type === 'pattern' && <p className='text-red-500' role="alert">{errors.email.message}</p>}
                       </label>
                     </div>
                     {/*end of daisy ui input email*/}
                             {/* daisy ui input password*/}
                     <div className="form-control w-full max-w-xs">
                       <label className="label">
                         <span className="label-text">Password</span>
                       </label>
                       <input 
                             type="Password" 
                             placeholder="Password" 
                             className="input input-bordered w-full max-w-xs" 
                             {...register("password", {
                               required:{
                                value :true,
                                message:'Password is required'
                               },
                              minLength: {
                                value: 6,
                                message: ' Password must be 6 character or longer ' 
                              }
                             }
                           )} 
                       />
                       <label className="label">
                       {errors.password?.type === 'required' && <p className='text-red-500' role="alert">{errors.password.message}</p>}
                       {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">{errors.password.message}</p>}
                       </label>
                     </div>
                     {/*end of daisy ui input password*/}
                     {signInError}
                           <input className='btn w-full max-w-xs text-white' type="submit" value="LOGIN" />
                   </form>
                    {/*end of login form */}


                    <p> <small>New to Doctors Poral <Link className='text-secondary' to="/signup" >Create New Account</Link> </small> </p>
                   <div className="divider">OR</div>
                     <button 
                   onClick={() => signInWithGoogle()} 
                   className="btn btn-outline btn-accent">
                       Continue with google
                    </button>
             </div>
          </div>
       </div>
    );
};

export default Login;