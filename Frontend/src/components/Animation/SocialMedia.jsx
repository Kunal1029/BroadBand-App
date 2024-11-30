import "./Animation.css";
import "../../App.css";

function SocialMedia() { 
  const tags1 = [
    { label: "Disney+Hotstar", icon: "./assets/images/sm/hotstar.jpeg" },
    { label: "Discovery+", icon: "./assets/images/sm/discovery.jpeg" },
    { label: "AltBalaji", icon: "./assets/images/sm/altbalaji.jpeg" },
    { label: "Eros", icon: "./assets/images/sm/eros.jpeg" },
    { label: "ETV", icon: "./assets/images/sm/etv.png" },
    { label: "Fancode", icon: "./assets/images/sm/fc.png" },
    { label: "Hoichoi", icon: "./assets/images/sm/hoichoi.png" },
    { label: "Jiocinema", icon: "./assets/images/sm/jiocinema.png" },
    { label: "Lionsgate", icon: "./assets/images/sm/lionsgate.png" },
    { label: "SonyLiv", icon: "./assets/images/sm/sony.jpeg" },
    { label: "Zee5", icon: "./assets/images/sm/zee5.png" },
  ];

  const tags2 = [
    { label: "Jiocinema", icon: "./assets/images/sm/jiocinema.png" },
    { label: "Lionsgate", icon: "./assets/images/sm/lionsgate.png" },
    { label: "SonyLiv", icon: "./assets/images/sm/sony.jpeg" },
    { label: "Zee5", icon: "./assets/images/sm/zee5.png" },
    { label: "ETV", icon: "./assets/images/sm/etv.png" },
    { label: "Fancode", icon: "./assets/images/sm/fc.png" },
    { label: "Hoichoi", icon: "./assets/images/sm/hoichoi.png" },
    { label: "Disney+Hotstar", icon: "./assets/images/sm/hotstar.jpeg" },
    { label: "Discovery+", icon: "./assets/images/sm/discovery.jpeg" },
    { label: "AltBalaji", icon: "./assets/images/sm/altbalaji.jpeg" },
    { label: "Eros", icon: "./assets/images/sm/eros.jpeg" },
  ]; 
  const tags3 = [
    { label: "ETV", icon: "./assets/images/sm/etv.png" },
    { label: "Fancode", icon: "./assets/images/sm/fc.png" },
    { label: "Hoichoi", icon: "./assets/images/sm/hoichoi.png" },
    { label: "Disney+Hotstar", icon: "./assets/images/sm/hotstar.jpeg" },
    { label: "Jiocinema", icon: "./assets/images/sm/jiocinema.png" },
    { label: "Lionsgate", icon: "./assets/images/sm/lionsgate.png" },
    { label: "SonyLiv", icon: "./assets/images/sm/sony.jpeg" },
    { label: "Zee5", icon: "./assets/images/sm/zee5.png" },
    { label: "Discovery+", icon: "./assets/images/sm/discovery.jpeg" },
    { label: "AltBalaji", icon: "./assets/images/sm/altbalaji.jpeg" },
    { label: "Eros", icon: "./assets/images/sm/eros.jpeg" },
    
  ];
  const ks = [...tags1,...tags1]
  const ks1 = [...tags2,...tags2]
  const ks2 = [...tags3,...tags3]
  return (
    <section className="container ">
      <div className="SMapp">
        <div className="smrow  mb-5 ">
          <div className="SMHeader col-lg-5 mt-5 mb-5">
            <h1>Stream your favorites on demand!</h1>
            <p className="mt-3">
              With eligible plans, access FREE OTT videos on any device using
              your Zeta Set-top Box login.
            </p>
          </div>

          <div className="SMtag-list mb-4 col-lg-6  ">

            <div
              className="SMloop-slider m-auto logos"
            >
              <div className="SMinner logos-slide">
                {ks.map((tag, index) => (
                  <div key={index} className="SMtag">
                    {tag.icon ? (
                      <span className="">
                        <img src={tag.icon} alt={tag.label} />
                      </span>
                    ) : (
                      <span>#</span>
                    )}
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="SMloop-slider m-auto logos"
            >
              <div className="SMinner logos-slide logos-slideRev">
                {ks1.map((tag, index) => (
                  <div key={index} className="SMtag">
                    {tag.icon ? (
                      <span className="">
                        <img src={tag.icon} alt={tag.label} />
                      </span>
                    ) : (
                      <span>#</span>
                    )}
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="SMloop-slider m-auto logos"
            >
              <div className="SMinner logos-slide">
                {ks2.map((tag, index) => (
                  <div key={index} className="SMtag">
                    {tag.icon ? (
                      <span className="">
                        <img src={tag.icon} alt={tag.label} />
                      </span>
                    ) : (
                      <span>#</span>
                    )}
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
