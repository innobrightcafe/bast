import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-20 shrink-0 items-end bg-black p-4 md:h-52">
        <Image
          width={200}
          height={76}
          alt="logo"
          src={'/aston_white-trans.png'}
        />
        <Image
          width={100}
          height={76}
          alt="logo mobile v"
          src={'/aston_white-trans.png'}
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Baston Project Managment System.</strong> This is the
            place where you can manage your investment portfolio{' '}
            <a href="https://bastonprojectmanagement.com" className="text-[#FF4300] hover:text-[#f77245] ">
              Go Back to Home.
            </a>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-[#FF4300] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#f77245]  md:text-base"
          >
            <span>Login</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 text-xl text-gray-800 md:w-3/5 md:px-28 md:py-2 md:text-3xl md:leading-normal">
          <h1></h1>
          {/*Form*/}
          <div className="h-screen md:flex">
            <div className="flex items-center justify-center bg-white py-10 md:w-1/2">
              <form className="bg-white">
                <h1 className="mb-1 text-2xl font-bold text-gray-800">
                  Hello!
                </h1>
                <p className="mb-7 text-sm font-normal text-gray-600">
                  Welcome
                </p>
                <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF4300]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    className="border-none pl-2 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF4300]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                  <input
                    className="border-none pl-2 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF4300]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    className="border-none pl-2 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center rounded-2xl border-2 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF4300]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    className="border-none pl-2 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                </div>
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-5 self-start rounded-lg bg-[#FF4300] px-6 py-3 text-sm font-medium text-white mt-4 transition-colors hover:bg-[#f77245] md:text-base"
                >
                  <span>Register</span>{' '}
                  <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
                <span className="ml-2 cursor-pointer text-sm hover:text-[#FF4300]">
                  Forgot Password ?
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
