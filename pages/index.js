export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen justify-center items-center bg-[url('../public/images/homepage/homepage_background.png')] object-none">
        <h1 className="text-8xl -mt-20 md:m-0 md:text-9xl font-black w-3/4 md:text-center">
          Coding a better world together.
        </h1>
      </div>

      <div className="flex justify-between bg-[#7055FD] md:bg-white py-48 px-10 md:px-48 rounded-2xl drop-shadow-lg">
        <div className="flex flex-col md:w-1/3">
          <h2 className="hidden md:block text-5xl text-[#FF4D6F] font-bold">code the change yyc</h2>
          <p className="text-2xl text-white md:text-[#A689FF] font-medium">
            <strong className="md:hidden">code the change yyc</strong> is a student-led initiative where students in
            technology-focused programs volunteer their time to work on projects for causes as a way to grow their
            skills, gain experience, attain mentorship, and give back to the community.
          </p>
        </div>
        {/* TODO: Add image here */}
        <div></div>
      </div>

      <div className="flex justify-between py-48 px-10 md:px-48 items-center divide-x-4 divide-[#A689FF]">
        <div className="flex flex-col w-1/2 pr-32">
          <h1 className="text-5xl font-bold">Coding</h1>
          <p className="text-2xl text-white font-medium mt-4">
            We seek to partner with causes that have projects on the go that need additional programming and software
            development support. We will work with you to find the right tool for the job. We prefer projects that are
            already underway with a good vision, but require a lot more technical work to move it along.
          </p>
          {/* TODO: Add image here */}
          <div></div>
        </div>

        <div className="flex flex-col w-1/2 pl-32">
          <h1 className="text-5xl font-bold">Community</h1>
          <p className="text-2xl text-white font-medium mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec vitae ac faucibus. Blandit ultrices magna
            natoque enim quis suscipit. Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque
            molestie mi placerat ultrices sit in sit pretium ut.
          </p>
          {/* TODO: Add image here */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
