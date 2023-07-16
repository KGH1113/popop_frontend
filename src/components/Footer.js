import logo from "../logo192.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header"><img src={logo} />Popop</div>
      <div className="footer-links">
        <div className="link">
          <h5>Website Dev</h5>
          <p>강구현(Guhyeon Kang)</p>
          <p
            style={{ textDecoration: "underline" }}
            onClick={function () {
              window.open("mailTo:gangguhyeon1113@gmail.com");
            }}
          >
            Email: gangguhyeon1113@gmail.com
          </p>
          <p
            style={{ textDecoration: "underline" }}
            onClick={function () {
              window.open("https://github.com/KGH1113");
            }}
          >
            Github: KGH1113
          </p>
          <p
            style={{ textDecoration: "underline" }}
            onClick={function () {
              window.open("https://www.instagram.com/kgh_guhyeon/");
            }}
          >
            Instagram: @kgh_guhyeon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
