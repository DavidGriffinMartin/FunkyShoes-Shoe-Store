import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon className="icon" fab icon="facebook-f" />
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/joerogan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon className="icon" fab icon="twitter" />
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon className="icon" fab icon="google" />
          </a>
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon className="icon" fab icon="instagram" />
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon className="icon" fab icon="linkedin-in" />
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/DavidGriffinMartin/project3-frontend"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon className="icon" fab icon="github" />
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "#eb3863" }}>
        © 2022 Copyright:
        <a
          className="text-white"
          href="https://funkyshoes.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          FunkyShoes
        </a>
      </div>
    </MDBFooter>
  );
}
