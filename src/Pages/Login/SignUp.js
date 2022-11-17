import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating ,updateError] = useUpdateProfile(auth);
      const [token]=useToken(user || user1 );

      const navigate=useNavigate();

    let signInError;

    if( loading || loading1 || updating){
      return <Loading></Loading>
    }

    if(error || error1 || updateError){
        signInError= <p className='text-red-500' >{error?.message || error1?.message || updateError?.message }</p>
    }
      
    if (token) {
         //console.log(user || user1);
        navigate('/appointment');
    }

    const onSubmit =async data =>{ 
       //console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({displayName :data.name});
      console.log('update done');
     
      }

    return (
        <div className='flex h-screen justify-center items-center ' >
            <div className="card w-96 bg-base-100 shadow-xl">
               <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Sign Up</h2>
                     {/* login form */}
                     <form onSubmit={handleSubmit(onSubmit)}>
                             {/* daisy ui input name*/}
                     <div className="form-control w-full max-w-xs">
                       <label className="label">
                         <span className="label-text">Name</span>
                       </label>
                       <input 
                             type="text" 
                             placeholder="Name" 
                             className="input input-bordered w-full max-w-xs" 
                             {...register("name", {
                               required:{
                                value :true,
                                message:'Name is required'
                               }
                             })} 
                       />
                       <label className="label">
                       {errors.name?.type === 'required' && <p className='text-red-500' role="alert">{errors.name.message}</p>}
                       </label>
                     </div>
                     {/*end of daisy ui input name*/}
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
                           <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                   </form>
                    {/*end of login form */}


                    <p> <small>Already have an account ? <Link className='text-secondary' to="/login" >Please login</Link> </small> </p>
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

export default SignUp;