import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
        <div class="navbar-fixed">
          <nav class="#689f38 light-green darken-2">
            <div class="container">
              <div class="nav-wrapper">
                <a href="#home" class="brand-logo">Jeans Forever</a>
                <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#brands">Our Brands</a></li>
                  <li><a href="#services">Our Services</a></li>
                  <li><a href="#whats">What's Hot</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* sidenav */}
        <ul class="sidenav" id="mobile-nav">
          <li><a href="#about">About Us</a></li>
          <li><a href="#brands">Our Brands</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#whats">What's Hot</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Slider */}
        <div class="slider">
          <ul class="slides">
            <li>
              <img src="img/slider/1.jpg" /> {/* random image */}
              <div class="caption left-align">
                <h3>This is yours!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="img/slider/2.jpg" /> {/* random image */}
              <div class="caption right-align">
                <h3>This is yours!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="img/slider/3.jpg" /> {/* random image */}
              <div class="caption center-align">
                <h3>This is yours!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>

        {/* about us */}
        <section id="about" class="about scrollspy">
          <div class="container">
            <div class="row">
              <h3 class="center light grey-text text-darken-3">About Us</h3>
              <div class="col m6 light">
                <h5>Jeans is Yours</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero distinctio reiciendis ad
                    blanditiis officiis excepturi quasi velit commodi! Asperiores maxime cupiditate quis optio rem
                        voluptas at deserunt reiciendis quia?</p>
              </div>
              <div class="col m6 light">
                <h5>Everything made for Yours</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus maxime tempora
                    unde, officia earum natus fuga aliquam odio est a numquam totam ipsam quas autem provident!
                        Sunt, nam voluptatum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <div id="brands" class="parallax-container scrollspy">
          <div class="parallax"><img src="img/slider/jeans.jpg" /></div>

          <div class="container brands">
            <h3 class="center light white-text">Our Brands</h3>
            <div class="row">
              <div class="col m4 s12 center">
                <img src="img/brands/emba.png" />
              </div>
              <div class="col m4 s12 center">
                <img src="img/brands/wrangler.png" />
              </div>
              <div class="col m4 s12 center">
                <img src="img/brands/levis.png" />
              </div>
            </div>
          </div>
        </div>

        {/* services */}
        <section id="services" class="services grey lighteen-3 scrollspy">
          <div class="container">
            <div class="row">
              <h3 class="light center grey-text text-darken-3">Our Services</h3>
              <div class="col m4 s12">
                <div class="card-panel center">
                  <i class="material-icons medium">phone_iphone</i>
                  <h5>Download Appstore</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolores culpa autem pariatur?
                      Quam, aliquid at? In quaerat nam doloremque voluptatum unde perspiciatis saepe natus,
                            numquam, minima ratione ducimus id.</p>
                </div>
              </div>
              <div class="col m4 s12">
                <div class="card-panel center">
                  <i class="material-icons medium">phone_android</i>
                  <h5>Download Playstore</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolores culpa autem pariatur?
                      Quam, aliquid at? In quaerat nam doloremque voluptatum unde perspiciatis saepe natus,
                            numquam, minima ratione ducimus id.</p>
                </div>
              </div>
              <div class="col m4 s12">
                <div class="card-panel center">
                  <i class="material-icons medium">forum</i>
                  <h5>Discuss with Us</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolores culpa autem pariatur?
                      Quam, aliquid at? In quaerat nam doloremque voluptatum unde perspiciatis saepe natus,
                            numquam, minima ratione ducimus id.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* whats */}
        <section id="whats" class="whats scrollspy">
          <div class="container">
            <h3 class="light center grey-text text-darken-3">What's Hot</h3>
            <div class="row">
              <div class="col m3 s12">
                <img src="img/whats/a.jpg" class="responsive-img materialboxed" />
              </div>
              <div class="col m3 s12">
                <img src="img/whats/b.jpg" class="responsive-img materialboxed" />
              </div>
              <div class="col m3 s12">
                <img src="img/whats/c.jpg" class="responsive-img materialboxed" />
              </div>
              <div class="col m3 s12">
                <img src="img/whats/d.jpg" class="responsive-img materialboxed" />
              </div>
            </div>
            <div class="row">
              <div class="col m3 s12">
                <img src="img/whats/e.jpg" class="responsive-img materialboxed" />
              </div>
              <div class="col m3 s12">
                <img src="img/whats/f.jpg" class="responsive-img materialboxed" />
              </div>
              <div class="col m3 s12">
                <img src="img/whats/a.jpg" class="responsive-img materialboxed" />
              </div>
              <div class="col m3 s12">
                <img src="img/whats/b.jpg" class="responsive-img materialboxed" />
              </div>
            </div>
          </div>
        </section>

        {/* contact us */}
        <section id="contact" class="contact grey lighteen-3 scrollspy">
          <div class="container">
            <h3 class="light center grey-text text-darken-3">Contact Us</h3>
            <div class="row">
              <div class="col m5 s12">
                <div class="card-panel #689f38 light-green darken-2 center">
                  <i class="material-icons white-text">email</i>
                  <h5>Email</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <ul class="collection with-header">
                  <li class="collection-header center">
                    <h4>Find Us</h4>
                  </li>
                  <li class="collection-item">Jeans Forever</li>
                  <li class="collection-item">Jalan Sudirman 24 Karet Jakarta Selatan</li>
                  <li class="collection-item">Jakarta, Indonesia</li>
                </ul>
              </div>

              <div class="col m7 s12">
                <form action="">
                  <div class="card-panel">
                    <h5>Please fill this form:</h5>
                    <div class="input-field">
                      <input type="text" name="name" id="name" required class="validate" />
                      <label for="name">Name</label>
                    </div>
                    <div class="input-field">
                      <input type="email" name="email" id="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                    <div class="input-field">
                      <input type="text" name="phone" id="phone" />
                      <label for="phone">Telp</label>
                    </div>
                    <div class="input-field">
                      <textarea name="message" id="message" class="materialize-textarea"></textarea>
                      <label for="message">Message</label>
                    </div>
                    <button type="submit" class="btn #689f38 light-green darken-2">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer class="#689f38 light-green darken-2 white-text center">
          <p class="flow-text">Jeans Forever</p>
        </footer>
      </div >
    );
  }
}

export default App;
