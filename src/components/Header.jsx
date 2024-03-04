export const Header = () => {
  return (
    <>
      <section className="flex w-full items-center justify-between bg-[#281856] py-3">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">     
            <img
              src="../src/assets/images/logotechnodevs.png"
              alt="logo"
              className="ml-4 mr-2 h-7"
            />
          <h1 className="text-2xl font-bold text-purple-200">Technodevs</h1>
        </div>
      </section>
    </>
  );
};
