import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

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

const SectionFooter = styled.footer`
  height: 100%;
  width: 100%;
  padding: 64px 64px 32px 64px;
  background-color: #2d2d2d;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  max-width: 1228px;
  padding-left: 64px;
  padding-right: 64px;
`;

const FirstColumn = styled.div`
  div:nth-child(1) {
    margin-bottom: 26px;
  }
  div {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #fff;
    text-decoration: none;
  }
`;
const MiddleColumn = styled.div`
  display: flex;
  gap: 64px;
  div {
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: 500;
      line-height: 32px;
      text-transform: uppercase;
      font-size: 16px;
      color: #8f8f8f;
    }
    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 32px;
      color: #fff;
      text-decoration: none;
    }
  }
`;
const EndColumn = styled.div`
  a {
    color: #fff;
    padding-left: 14px;
    text-decoration: none;
  }
`;

const Divider = styled.div`
  margin-top: 64px;
  margin-bottom: 32px;
  width: 100%;
  height: 1px;
  background-color: #8f8f8f;
`;

const SecondRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  gap: 172px;
  div p {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
  }
  div a {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    text-decoration: none;
  }
`;
