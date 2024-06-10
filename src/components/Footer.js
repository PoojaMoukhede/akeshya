import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="Copyright">
              &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
            </div>
            <div className="footer-links">
              <ul className=" d-flex list-unstyled">
                <li className="px-3">
                  <a
                    href="https://akeshya.com/Privacy%20policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="https://akeshya.com/Refund%20policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Refund policy
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="https://akeshya.com/Privacy%20policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
