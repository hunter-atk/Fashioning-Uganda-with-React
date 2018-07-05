import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>This is the HomePage!</h1>
//   </div>,
//   document.getElementById("root")
// );

const HomePage = () => {
  return (
    <div>
      <section id="banner">
        <div id="heading">
          <h1>Fashioning Uganda</h1>
          <hr id="divider" />
          <h2>20 Years of Style in Uganda's Pearl</h2>
        </div>
      </section>
      <section id="home-description">
        <div id="first-column">
          <h3 id="descriptionAside">
            A study of Uganda's beauty and fashion industries through a
            global-intimate lens
          </h3>
          <br />
        </div>
        <div id="second-column">
          <p>
            Welcome! This web archive contains 6000 images of decades' worth of
            magazine and newspaper content published by New Vision Printing &
            Publishing Company Limited (NVPPCL), a multimedia business started
            in March 1986 in Uganda. Dr. Caroline Faria and the Feminist
            Geography Collective at the University of Texas' Department of
            Geography and the Environment use these images as data for their
            work on Dr. Faria's NSF project concerning the beauty and fashion
            industry in Uganda. These images, aquired in Uganda in 2016, have
            been made available on this website to university students and
            faculty for their own research. Feel free to browse the web archive
            for images, or explore the site to learn more about Dr. Faria, her
            research, and UT's Feminist Geography Collective.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
