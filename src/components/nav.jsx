<div className="flex justify-between items-center px-4 md:px-8 m-2 ">
        {/* SVG Links on the Left (Hidden on Mobile, Shown on Desktop) */}
        <div className="flex md:space-x-4">
          <a
            href="#"
            className="rounded-full p-2 transform transition duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full p-2 transform transition duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full p-2 transform transition duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m6 4H9m6-8H9" />
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full p-2 transform transition duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </a>
        </div>

        {/* Group Scrolling Text and Contact Button on the Right (for larger screens) */}
        <div className="flex items-center space-x-4">
          {/* Scrolling Text */}
          <div className="relative overflow-hidden whitespace-nowrap rounded-md hidden md:block">
            {/* The blur effect on the scrolling text */}
            <div className="absolute inset-0 bg-black bg-opacity-30 blur-lg transition duration-300 hover:blur-none"></div>
            <div className="animate-marquee relative z-10">
              <span className="mx-2">This Page Is A Work In Progress </span>
             
            </div>
          </div>

          {/* "Contact" Button */}
          <div>
            <a
              href="mailto:0xdyana@gmail.com"
              className="relative inline-block px-4 py-2 font-medium group "
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-sm"></span>
              <span className="absolute inset-0 w-full h-full bg-purple-200 rounded-sm border-2 border-purple-900 group-hover:bg-purple-950"></span>
              <span className="relative text-gray-900 group-hover:text-muted-foreground">Contact</span>
            </a>
          </div>
        </div>
      </div>