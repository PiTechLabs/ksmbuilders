import React from 'react'

function Login() {
    return (
        <>
            <div class="w-full flex flex-wrap">
                <div class="w-full md:w-1/2 flex flex-col">
                    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <p class="bg-black text-white font-bold text-xl p-4">Logo</p>
                    </div>
                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl animate-bounce">!-- Welcome --!</p>
                        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                            <div class="flex flex-col pt-4">
                                <input type="text" id="username" placeholder="Username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            
                            <div class="flex flex-col pt-4">
                                <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                        </form>
                    </div>
                </div>
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="" />
                </div>
            </div>
        </>
    );
}

export default Login