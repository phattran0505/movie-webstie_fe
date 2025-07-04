import { Link } from "react-router-dom";

import { footerSocials } from "../../assets/data/data";

import "./Footer.css";
function Footer() {
  return (
    <footer className="w-full h-auto bg-footer-bg">
      <div className="container w-full max-w-[1900px]">
        <div className="footer-element">
          <div className="footer-icon">
            <img
              src={
                "https://res.cloudinary.com/djmeybzjk/image/upload/v1745254441/footer-icon_scgssa.svg"
              }
              alt=""
            ></img>
          </div>
          <div className="footer-left max-w-[750px] relative">
            <div className="footer-logo w-full inline-flex items-center gap-12 mb-8">
              <Link to={"/"}>
                <img
                  src={
                    "https://res.cloudinary.com/djmeybzjk/image/upload/v1745742495/logo_szf2ca.svg"
                  }
                  alt=""
                  className="h-[60px] w-auto"
                ></img>
              </Link>
              <ul className="inline-flex flex-wrap justify-center gap-[.75rem] pl-12  border-l-[1px] border-border-color">
                {footerSocials.map((social, index) => (
                  <Link
                    key={index}
                    className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-bg-color-2 hover:text-white-color"
                  >
                    <div className="w-[14px] h-[14px]">
                      <img
                        className="w-full h-full"
                        src={social.icon}
                        alt=""
                      ></img>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <ul className="w-full mb-4">
              <Link className="mr-6 whitespace-nowrap">Hỏi-đáp</Link>
              <Link className="mr-6 whitespace-nowrap">Chính sách bảo mật</Link>
              <Link className="mr-6 whitespace-nowrap">Điều khoản sử dụng</Link>
              <Link className="mr-6 whitespace-nowrap">Giới thiệu</Link>
              <Link className="mr-6 whitespace-nowrap">Liên hệ</Link>
            </ul>
            <div className="mb-2">
              Movie Website – Nền tảng xem phim trực tuyến chất lượng cao Cung
              cấp trải nghiệm xem phim miễn phí với phụ đề Vietsub, thuyết minh,
              và lồng tiếng đầy đủ. Kho phim phong phú từ phim lẻ, phim bộ, đến
              phim chiếu rạp, đến từ nhiều quốc gia như Việt Nam, Hàn Quốc,
              Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… Tận hưởng chất lượng hình
              ảnh sắc nét lên đến 4K cùng đa dạng thể loại hấp dẫn nhất năm
              2025.
            </div>
            <div>© 2025 Movie Website</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
