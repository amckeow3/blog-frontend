/* eslint-disable react/style-prop-object */
import { Container } from "@mui/system";
import React from "react";
import './Header.css';

const Header = () => {
    return(
    <>
        <div className="header_sec d-block d-flex">
            <Container>
                <div className="header_text mx-auto">
                    <div className="header1">[happily ever]</div>
                    <div className="header2">ADRIANNA</div>
                </div>
            </Container>
        </div>
    </>
    )
}

export default Header;