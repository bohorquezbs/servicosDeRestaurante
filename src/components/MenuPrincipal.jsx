export function MenuPrincipal() {
    return(
        
        <div className="flex w-[100%] h-[100%] ">
        <div className="bg-blue-400 hidden md:block">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Letter-food-logo-by-DEEMKA-STUDIO-312x208.jpg" alt="logo de comida" className=""/>
        </div>
        <div className="bg-amber-400 w-full px-6 py-20 ">
        <form class="">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
            <div>
              
            </div>
          </div>
          <div className="flex flex-col gap-6">
          <button
            type="submit"
            class="text-white bg-[#DA5E2B] hover:bg-[#875638] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
          >
            Ingresar
          </button>
          
          <span className="text-white flex justify-center">¿No tienes una cuenta? </span>
          <button
            type="submit"
            class="text-white bg-[#875638] hover:bg-[#DA5E2B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
          >
            
    
            Registrarse
          </button>
          <div className="">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Letter-food-logo-by-DEEMKA-STUDIO-312x208.jpg" alt="" className="w-[100%] h-[15rem]"/>
          </div>
          </div>
         
        </form>
        </div>
        </div>   
          
        
    )
}
