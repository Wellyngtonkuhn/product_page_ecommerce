import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Divider, EndColumn, FirstColumn, FirstRow, MiddleColumn, SecondRow, SectionFooter } from "./styleFooter";



export default function Footer() {
  return (
    <>
      <SectionFooter>
        <FirstRow>
          <FirstColumn>
            <div>
              <img
                src="https://www.datocms-assets.com/30257/1614688758-logo-white.svg"
                alt="Logo_Lexir"
              />
            </div>
            <div>
              <img
                src="https://www.datocms-assets.com/30257/1627334739-icons8-france.svg"
                alt="France"
              />
              <a href="#">France</a>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#fff"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-.248 15.039l-1.373-3.418-3.418-1.373c-.745-.299-.726-1.361.029-1.633l8.25-2.973a.874.874 0 011.119 1.119l-2.973 8.25c-.272.754-1.334.773-1.634.028z"
                ></path>
              </svg>
              <a href="#">English</a>
            </div>
          </FirstColumn>

          <MiddleColumn>
            <div>
              <h2>Community</h2>
              <a href="#">Lexir for Brands</a>
              <a href="#">Business Buyers</a>
              <a href="#">Sales Affiliates</a>
            </div>

            <div>
              <h2>Platfrom</h2>
              <a href="#">Resources</a>
              <a href="#">Get Started</a>
            </div>

            <div>
              <h2>Company</h2>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Legal</a>
            </div>

            <div>
              <h2>Lexir Shop</h2>
              <a href="#">Brands</a>
              <a href="#">Spirits</a>
              <a href="#">Wine</a>
              <a href="#">Blog</a>
            </div>
          </MiddleColumn>

          <EndColumn>
            <div>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </EndColumn>
        </FirstRow>
        <Divider />

        <SecondRow>
          <div>
            <p>© 2022 Lexir Inc.</p>
          </div>
          <div>
            <a href="#">Terms of Service</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
        </SecondRow>
      </SectionFooter>
    </>
  );
}
