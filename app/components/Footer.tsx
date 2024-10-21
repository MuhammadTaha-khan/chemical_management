import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              {/* Replace the src with Next.js Image */}
              <Image
                src="/k12_logo.png"
                alt="FlowBite Logo"
                width={32}
                height={32}
                className="h-8 me-3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Chemical Management
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow us
              </h2> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Contact Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Chemical™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <h1 className='text-gray-500'>Address: <span className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehe</span></h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
