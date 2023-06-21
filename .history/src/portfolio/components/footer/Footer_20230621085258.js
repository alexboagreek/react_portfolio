import React from 'react';
import './footer.scss'
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";

import facebook from './../../assets/socialIcon/bx_bxl-facebook.png'
import linkedIn from './../../assets/socialIcon/bx_bxl-linkedin.png'
import instagram from './../../assets/socialIcon/bx_bxl-instagram.png'
import github from "../../assets/socialIcon/github.png";

import logo from './../../assets/header-footer/logo-red.png'

export const Footer = () => {

  const initialSocialIcons = [
    {urlIcon: facebook, urlSocial: "#"},
    {urlIcon: linkedIn, urlSocial: "https://www.linkedin.com/in/alexeinikitin/"},
    {urlIcon: instagram, urlSocial: "https://instagram.com/alexalex_2576?utm_medium=copy_link"},
    {urlIcon: github, urlSocial: "https://github.com/alexeynikinitin"},
  ]

  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="Logo"/>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <ul className="social_share d-flex justify-content-center">
              {
                initialSocialIcons.map(s => <SocialIcon urlIcon={s.urlIcon} urlSocial={s.urlSocial}/> )
              }
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="text">
              <p>
                Alexey Nikitin
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};