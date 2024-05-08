import React from 'react'

function Login() {
  return (
    <div>
      {/* <!-- component --> */}
<div className="relative flex h-full w-full">
  <div className="h-screen w-1/2 bg-black">
    <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">

      <div className="mt-10" >
        <form>
          <div>
            <label className="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
          </div>
          <div className="mt-4">
            <label className="mb-2.5 block font-extrabold" for="email">Password</label>
            <input type="password" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
            {/* <!-- Remember me --> */}
            <div><input type="checkbox" id="remember" /><label for="remember" className="mx-2 text-sm">Remember me</label></div>
            {/* <!-- Forgot password --> */}
            <div>
              <a href="#" className="text-sm hover:text-gray-200">Forgot password</a>
            </div>
          </div>
          <div className="my-10">
            <button className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Login</button>
          </div>
        </form>
        <div>
        <fieldset className="border-t border-solid border-gray-600">
          <legend className="mx-auto px-2 text-center text-sm">you don't have register <a href='/' className='text-blue-600'>Signup</a></legend>
        </fieldset>
      </div>
      </div>
    </div>
  </div>
  <div className="h-screen w-1/2">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" className="h-full w-full" />
  </div>
</div>
    </div>
  )
}

export default Login
