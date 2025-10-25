'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const OriginalLayout = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Replicating Original Structure */}
      <header className="wgl-theme-header">
        <div className="wgl-site-header mobile_header_custom">
          <div className="container-wrapper">
            <div className="elementor elementor-272">
              <div className="elementor-element elementor-element-afcdbc9 e-flex e-con-boxed e-con e-parent">
                <div className="e-con-inner">
                  {/* Logo */}
                  <div className="elementor-element elementor-element-9d092c8 elementor-widget__width-initial elementor-widget-tablet__width-auto animated fadeIn elementor-widget-mobile__width-initial elementor-widget elementor-widget-wgl-header-logo">
                    <div className="elementor-widget-container">
                      <div className="wgl-logotype-container default_logo">
                        <a href="/">
                          <Image
                            className="default_logo"
                            src="/Logo-LitoCalegari.png"
                            alt="logotype"
                            width={120}
                            height={38}
                            style={{ height: '38px' }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="elementor-element elementor-element-8bc2e72 elementor-hidden-tablet elementor-hidden-mobile elementor-mobile-breakpoint elementor-widget elementor-widget-wgl-menu">
                    <div className="elementor-widget-container">
                      <nav className="primary-nav">
                        <ul className="menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item">
                            <a href="/">
                              <span className="item_wrapper_text">
                                <span className="item_text">Home</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a href="#">
                              <span className="item_wrapper_text">
                                <span className="item_text">Servizi</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                            <ul className="sub-menu wgl-submenu-position-default">
                              <li className="menu-item">
                                <a href="/progettazione-grafica">
                                  <span className="item_wrapper_text">
                                    <span className="item_text">
                                      Progettazione Grafica
                                    </span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="/stampa-digitale">
                                  <span className="item_wrapper_text">
                                    <span className="item_text">
                                      Stampa Digitale
                                    </span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="/stampa-offset">
                                  <span className="item_wrapper_text">
                                    <span className="item_text">
                                      Stampa Offset
                                    </span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="/contatti">
                              <span className="item_wrapper_text">
                                <span className="item_text">Contatti</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="elementor-element elementor-element-f2f8607 elementor-hidden-tablet elementor-hidden-mobile aleft has-separated elementor-widget elementor-widget-wgl-button">
                    <div className="elementor-widget-container">
                      <a
                        className="wgl-button btn-size-md"
                        href="/contatti"
                        role="button"
                      >
                        <div className="button__content">
                          <span className="button__text">CONTATTACI</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" className="site-main">
        <div className="wgl-container">
          <div className="row sidebar_none">
            <div id="main-content" className="wgl_col-12">
              <div className="elementor elementor-1523">
                {/* Hero Section Container */}
                <div className="elementor-element elementor-element-87cafec e-flex e-con-boxed e-con e-parent">
                  <div className="e-con-inner">
                    {/* Spacer */}
                    <div className="elementor-element elementor-element-b6c575d elementor-hidden-mobile elementor-widget elementor-widget-spacer">
                      <div className="elementor-spacer">
                        <div className="elementor-spacer-inner"></div>
                      </div>
                    </div>

                    {/* Hero Content Container */}
                    <div className="elementor-element elementor-element-968ebe9 wgl-add-background-text e-con-full e-flex e-con e-child">
                      {/* Top Spacers */}
                      <div className="elementor-element elementor-element-6998d80 elementor-widget elementor-widget-spacer">
                        <div className="elementor-spacer">
                          <div
                            className="elementor-spacer-inner"
                            style={{ height: '80px' }}
                          ></div>
                        </div>
                      </div>

                      <div className="elementor-element elementor-element-1edfb07 elementor-widget elementor-widget-spacer">
                        <div className="elementor-spacer">
                          <div
                            className="elementor-spacer-inner"
                            style={{ height: '40px' }}
                          ></div>
                        </div>
                      </div>

                      <div className="elementor-element elementor-element-1cd8016 elementor-widget elementor-widget-spacer">
                        <div className="elementor-spacer">
                          <div
                            className="elementor-spacer-inner"
                            style={{ height: '20px' }}
                          ></div>
                        </div>
                      </div>

                      {/* Main Heading - With Animation */}
                      <div className="elementor-element elementor-element-dcd6408 acenter elementor-widget-mobile__width-initial elementor-widget elementor-widget-wgl-double-heading animated fadeIn">
                        <div className="elementor-widget-container">
                          <div className="wgl-double-heading">
                            <div className="dblh__subtitle">
                              Dove le tue idee prendono forma
                            </div>
                            <h3 className="dblh__title-wrapper">
                              <span className="dblh__title dblh__title-1">
                                <span>Studio grafico e stampa</span>
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Middle Spacer */}
                      <div className="elementor-element elementor-element-6681607 elementor-widget elementor-widget-spacer">
                        <div className="elementor-spacer">
                          <div
                            className="elementor-spacer-inner"
                            style={{ height: '30px' }}
                          ></div>
                        </div>
                      </div>

                      {/* Description - With Animation */}
                      <div className="elementor-element elementor-element-210d2ff elementor-widget__width-initial elementor-widget elementor-widget-text-editor animated fadeIn">
                        <p>
                          Dalla progettazione grafica alla stampa di alta
                          qualità, offriamo soluzioni creative e su misura per
                          valorizzare la tua comunicazione
                        </p>
                      </div>

                      {/* Bottom Spacers */}
                      <div className="elementor-element elementor-element-96fe922 elementor-hidden-mobile elementor-widget elementor-widget-spacer">
                        <div className="elementor-spacer">
                          <div
                            className="elementor-spacer-inner"
                            style={{ height: '60px' }}
                          ></div>
                        </div>
                      </div>

                      <div className="elementor-element elementor-element-e8ee3ef elementor-hidden-mobile elementor-widget elementor-widget-spacer">
                        <div className="elementor-spacer">
                          <div
                            className="elementor-spacer-inner"
                            style={{ height: '40px' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Layers Section */}
                <div className="elementor-element elementor-element-1d7fedc e-con-full e-flex e-con e-parent e-lazyloaded">
                  <div className="elementor-element elementor-element-c4ee8dd elementor-widget elementor-widget-wgl-image-layers">
                    <div className="elementor-widget-container">
                      <div className="wgl-image-layers img-layer_animate">
                        {/* Layer 1 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-b9bd2f5"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '350ms' }}
                            >
                              <Image
                                src="/images/layer_3-1a.png"
                                alt="layer_3-1a"
                                width={200}
                                height={200}
                                className="animate-float"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Layer 2 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-66e69ee"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '700ms' }}
                            >
                              <Image
                                src="/images/Artboard-15-scaled.png"
                                alt="Artboard 15"
                                width={250}
                                height={250}
                                className="animate-float-delayed"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Layer 3 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-ce41d20"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '1050ms' }}
                            >
                              <Image
                                src="/images/layer_3-7.webp"
                                alt="layer_3-7"
                                width={180}
                                height={180}
                                className="animate-float-slow"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Layer 4 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-aea33d3"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '1400ms' }}
                            >
                              <Image
                                src="/images/Artboard-4-scaled.png"
                                alt="Artboard 4"
                                width={150}
                                height={150}
                                className="animate-float-reverse"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Layer 5 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-7b04ee9"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '1750ms' }}
                            >
                              <Image
                                src="/images/Artboard-7-scaled.png"
                                alt="Artboard 7"
                                width={220}
                                height={220}
                                className="animate-float"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Layer 6 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-db5734b"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '2100ms' }}
                            >
                              <Image
                                src="/images/Artboard-1-scaled.png"
                                alt="Artboard 1"
                                width={190}
                                height={190}
                                className="animate-float-delayed"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Layer 7 */}
                        <div
                          className="img-layer_image-wrapper elementor-repeater-item-fde2cf3"
                          style={{ zIndex: 1 }}
                        >
                          <div className="img-layer_item">
                            <div
                              className="img-layer_image"
                              style={{ transitionDelay: '2450ms' }}
                            >
                              <Image
                                src="/images/Artboard-8-1-scaled.png"
                                alt="Artboard 8"
                                width={160}
                                height={160}
                                className="animate-float-slow"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OriginalLayout
