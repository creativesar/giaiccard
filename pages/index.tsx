import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300 relative">
          {/** Background image **/}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[375px] min-h-[100px]">
              <Image
                src="/images/govimage.png"
                alt="background image"
                width={300}
                height={150}
                className="opacity-5 object-cover"
              />
            </div>
          </div>
          {/** Content goes here **/}

          {/*Left Section */}

          {/*Logo*/}
          <img
            src="/images/Governor_of_Sindh_Logo.png"
            alt="profile logo"
            className="absolute top-4 left-16 w-12 h-15 z-10"
          />

          <div className="w-2/3 pr-4 pt-16 relative z-10">
            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Name:</strong>
              </span>
              <span className="text-black"> Sarfraz Ahmad</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Roll Number:</strong>
              </span>
              <span className="text-black"> 00463271</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Distance Learning:</strong>
              </span>
              <span className="text-black"> No</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> City:</strong>
              </span>
              <span className="text-black"> Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Center:</strong>
              </span>
              <span className="text-black"> Governor House Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Campus:</strong>
              </span>
              <span className="text-black"> Main</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Days / Time:</strong>
              </span>
              <span className="text-black"> Sunday - 02:00 PM - 05:00 PM</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Batch:</strong>
              </span>
              <span className="text-black"> 1</span>
            </p>

            {/*Button*/}

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>

                <span className="relative z-10"> Q2 & WMD </span>
              </button>
            </div>
          </div>

          {/* Right Section For Image */}
          <div className="w-1/3 text-center relative z-10 max-w-[200px] max-h-[500px]">
            <Image
              src="/images/myimage.png"
              alt="profile image"
              width={300}
              height={300}
              className="rounded-lg mb-5 w-full border border-blue-200"
            />
            <p className="border-t-2 mt-20 border-t-slate-400 pt-2 font-bold text-sky-500 mt-5 text-2x1">
              {" "}
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
