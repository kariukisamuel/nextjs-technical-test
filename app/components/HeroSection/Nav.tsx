export default function Nav() {
    return (
        <header className="z-10 absolute w-full">
            <div className="flex w-4/6 justify-between items-center mx-auto mt-10">
                <div className="logo">
                    <h3 className="font-montserrat font-bold uppercase text-2xl">Dreamshare</h3>
                </div>
                <nav>
                    {/* <!-- Link Element --> */}
                    <a href="#home" className="text-white text-xl hover:bg-blazingRed hover:text-white hover:rounded-full hoverg:border-2 hover:border-white px-4 py-2 mr-5 rounded-md transition-colors duration-300">
                        Login
                    </a>

                    {/* <!-- Button Element --> */}
                    <button className="bg-transparent text-white text-xl hover:bg-blazingRed px-4 py-2 rounded-full border-2 border-white transition-colors duration-300 ">
                        Sign Up
                    </button>
                </nav>
            </div>

        </header>
    )
}