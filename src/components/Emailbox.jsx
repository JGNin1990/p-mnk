import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import { showModel } from "../rtk/showSlicer";

const Emailbox = () => {
  const isShow = useSelector((state) => state.show);
  const dispatch = useDispatch();
  // console.log(isShow);

  return (
    <>
      <div
        className={`w-full min-h-[100vh] bg-[rgba(0,0,0,0.85)] absolute z-[1000] top-0 duration-500 origin-top + ${
          !isShow && "scale-y-0"
        }`}
      >
        <div
          className="text-white absolute top-[30px] right-[30px] text-[50px] cursor-pointer hover:text-pri duration-300"
          onClick={() => dispatch(showModel())}
        >
          <RxCross2 />
        </div>
        <div className="w-[90%] sm:w-[600px] md:w-[700px] mx-auto border-2 p-10 rounded-lg shadow-lg mt-[100px] sm-mt-[170px] bg-white">
          <form>
            <h1 className="text-[30px] font-bold pb-5 text-pri">
              Send Mail to Me
            </h1>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number ( 09-123 456 789 )
              </label>
            </div>
            <div className="relative z-0 mb-6 border-b-2 border-gray-300">
              <ReactTextareaAutosize
                className="w-[60%] border-none focus:ring-0 px-0 text-sm  "
                placeholder="Text here"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-pri hover:bg-[#ff6219] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Emailbox;
