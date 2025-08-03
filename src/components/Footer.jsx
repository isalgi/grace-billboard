function Footer() {
  return (
    <footer className="px-20 pt-16 pb-10 bg-sky-50 max-sm:px-5 max-sm:py-10">
      <div className="flex justify-start mb-20 max-sm:flex-col gap-36">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center space-x-1">
            <div className="w-11 h-11 flex items-center justify-center">
              <img src="./logo-billboard.png" alt="" />
            </div>
            <div>
              <div className="text-[#0C098C] font-[500] text-[20px] leading-[24px]">
                Grace
              </div>
              <div className="text-[#0C098C] font-[500] text-[20px] leading-[24px]">
                Billboard
              </div>
            </div>
          </div>
          <p className="text-sm text-black max-w-48">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt sit amet
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl font-semibold text-[#0C098C]">
              Office Location
            </h3>
            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Nullam tincidunt sit amet
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl font-semibold text-[#0C098C]">Contact us</h3>
            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Nullam tincidunt sit amet
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-xl font-semibold text-[#0C098C]">Services</h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm font-semibold text-black">
              Lokasi
            </a>
            <a href="#" className="text-sm font-semibold text-black">
              Pemasangan
            </a>
            <a href="#" className="text-sm font-semibold text-black">
              Desain
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-[#0C098C]">Ask Now</h3>
          <img
            src="./whatsapp.png"
            alt=""
            className="h-[41px] w-[41px] mt-5 cursor-pointer"
          />
        </div>
      </div>
      <p className="text-xs font-medium text-center text-[#0C098C]">
        Copyright ©2025 - PT. GRACE BILLBOARD. All right reserved. Liability
        limited by a scheme approved under Proffessional Standart Legislation.
      </p>
    </footer>
  );
}

export default Footer;
