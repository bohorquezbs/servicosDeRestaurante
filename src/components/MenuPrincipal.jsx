export function MenuPrincipal() {
    return(
        
        <div className="menuContainer bg-[#E79406] flex justify-center items-center flex-col gap-5 h-full ">

            <div className="user flex justify-center items-center flex-col">
                <span className="p-2 text-white">Usuario</span>
                <input type="text" placeholder="Ingrese su usuario"  className="border-[2px] bg-amber-50 rounded-lg p-2" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <span className="p-2 text-white ">Contraseña</span>
                <input type="password" placeholder="Escribe tu contraseña"  className="border-[2px] bg-amber-50 rounded-lg p-2" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <button className="bg-[#875638] text-white px-4 py-2 rounded-lg transition duration-200 active:scale-95">
                    Registro
                </button>
            </div>
            <div className="flex justify-center items-center flex-col">
                <button className="bg-[#DA5E2B] text-white px-4 py-2 rounded-lg transition duration-200 active:scale-20">
                    Colaborador
                </button>
            </div>
        </div>       
        
    )
}
