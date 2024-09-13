import SectionTitle from "../../Common/SectionTitle";

type title = {
  title: string;
};

const Form = ({ title }: title) => {
  return (
    <section id="meet-a-partner-form" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <SectionTitle title={title} />
          <p className="font-roboto text-center text-lg">
            Hi! What are your holiday interests?
          </p>
        </div>
        <div>
          <form>
            <div className="w-full ">
              <div className="flex justify-center items-center py-3 mt-5 w-[80%] mx-auto">
                <div className="w-full sm:w-[70%]">
                  <input
                    className="appearance-none block  w-full  text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder=""
                    aria-label="Full name"
                  />
                </div>
                <div className="w-full sm:w-[30%]">
                  <button
                    className="bg-blazingRed text-white py-2 px-6 rounded-full text-lg font-bold hover:shadow-lg"
                    type="button"
                  >
                    Search partners
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Form;
