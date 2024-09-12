type title = {
    title: string;
}
export default function Form({ title }: title) {
    return (
        <section id="meet-a-partner" className="w-full pt-20">
            <div className="w-5/6 lg:w-[70%] mx-auto">
                <div className="text-center ">
                    <h2 className="text-gray-700 text-2xl font-montserrat font-bold">
                        {title}
                    </h2>
                    <p className="font-roboto text-lg">Hi! What are your holiday interests?</p>
                </div>
                <div className="">
                    <form className="w-full">
                        <div className="flex justify-center items-center py-3 mt-5">
                            <div className="relative mr-4 w-full">
                                <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="" aria-label="Full name" />
                            </div>
                            <div className="relative w-full">
                                <button className="bg-blazingRed text-white py-2 px-6 rounded-full text-lg font-bold hover:shadow-lg" type="button">
                                    Search partners
                                </button>
                            </div>


                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}