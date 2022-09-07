import styled from "styled-components";

export const SectionFooter = styled.footer`
  height: 100%;
  width: 100%;
  padding: 64px 64px 32px 64px;
  background-color: #2d2d2d;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  max-width: 1228px;
  padding-left: 64px;
  padding-right: 64px;
  margin: auto;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 0;
  }
`;

export const FirstColumn = styled.div`
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
export const MiddleColumn = styled.div`
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

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const EndColumn = styled.div`
  a {
    color: #fff;
    padding-left: 14px;
    text-decoration: none;
  }

  @media (max-width: 1050px) {
    a {
      padding: 0;
      padding-right: 16px;
    }
  }
`;

export const Divider = styled.div`
  margin-top: 64px;
  margin-bottom: 32px;
  width: 100%;
  height: 1px;
  background-color: #8f8f8f;
`;

export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  max-width: 1228px;
  margin: auto;
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

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    padding: 0;

    div p {
      padding-bottom: 28px;
    }
  }
`;
