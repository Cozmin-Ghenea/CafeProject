import { useNavigate } from "react-router-dom";
import { Bottom } from "../../components/Bottom";
import { CoffeeWindow } from "../../components/CoffeeWindow";
import { Menu } from "../../components/Menu";
import "./Home.scss";

export function Home() {
  const navigate = useNavigate();
  function createYourPlan() {
    navigate("/CreateYourPlan");
  }

  return (
    <div className="container">
      {/* ------ Menu side */}
      <Menu />

      {/* Description side */}
      <div className="descriptionSection row ">
        <div className="col-lg-12 col-md-12 col-xs-12 ">
          <h1>Great coffee made simple.</h1>
          <p className="smallDescription">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="button " onClick={createYourPlan}>
            {" "}
            Create your plan{" "}
          </button>
        </div>
      </div>

      {/* --------- Coffee Section  */}
      <div className="Coffe-Section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <h1 className="BackTitle">Our Collection</h1>
          </div>
          <CoffeeWindow
            className="Coffee-window col-lg-3 col-md-3 col-xs-1"
            image="assets/home/desktop/image-gran-espresso.png"
            title="Gran Espresso"
            desc="Light and flavorful blend with cocoa and black pepper for an intense experience"
          ></CoffeeWindow>
          <CoffeeWindow
            className=" Coffee-window col-lg-3 col-md-3 col-xs-1"
            image="assets/home/desktop/image-planalto.png"
            title="Planalto"
            desc="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
          ></CoffeeWindow>
          <CoffeeWindow
            className="Coffee-window col-lg-3 col-md-3 col-xs-1"
            image="assets/home/desktop/image-piccollo.png"
            title="Piccollo"
            desc="Mild and smooth blend featuring notes of toasted almond and dried cherry"
          ></CoffeeWindow>
          <CoffeeWindow
            className=" Coffee-window col-lg-3 col-md-3 col-xs-1"
            image="assets/home/desktop/image-danche.png"
            title="Danche"
            desc="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
          ></CoffeeWindow>
        </div>
      </div>

      {/* Why Choose Us ? */}
      <div className="ChooseUs">
        <h1> Why Choose Us?</h1>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="CardContainer row">
        <div className="CardModel col-lg-3 col-md-3  col-sm-12 col-xs-12">
          <div className="SvgImage">
            <svg width="75" height="75" viewBox="0 0 73 72">
              <path
                d="M71.806 39.226c-.968-9.481-5.498-18.76-12.758-26.122C43.93-2.22 21.512-4.428 9.078 8.194-3.365 20.812-1.19 43.537 13.924 58.864c7.26 7.362 16.41 11.957 25.76 12.938 1.246.13 2.475.198 3.687.198 8.04 0 15.229-2.858 20.523-8.226 6.088-6.17 8.901-14.89 7.912-24.548zm-22.125 7.78c-4.953-3.833-10.322-5.35-16.153-6.97C18.85 35.955 11.558 23.535 9.855 8.977c4.135 5.058 7.188 10.836 12.265 15.07 5.409 4.51 11.364 6.152 17.905 8.074 14.36 4.225 21.464 16.538 23.097 30.87-4.482-5.463-7.77-11.592-13.441-15.984z"
                fill="#FDD6BA"
              />
            </svg>
          </div>
          <div className="text-content">
            <h1>Best quality</h1>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="CardModel col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="SvgImage">
            <svg width="75" height="75" viewBox="0 0 73 72">
              <path
                d="M34 44v28H11.297C8.391 72 6 69.672 6 66.842V44h28zm32 0v22.842C66 69.672 63.609 72 60.703 72H38V44h28zM55.73 0C64.05.003 67 4.347 67 8.067c0 4.26-3.952 9.643-12.424 12.934L66.711 21C69.612 21 72 23.37 72 26.25v7.5c0 2.88-2.388 5.25-5.289 5.25H38l.001-15.02a70.21 70.21 0 01-1.7.02c-.1 0-.201-.006-.3-.02-.1.013-.2.02-.303.02-.574 0-1.14-.007-1.698-.02V39H5.289C2.388 39 0 36.63 0 33.75v-7.5C0 23.37 2.388 21 5.289 21h12.135C8.952 17.71 5 12.327 5 8.066 5 4.345 7.953 0 16.272 0 27.008 0 33.088 7.615 36 14.592 38.911 7.615 44.992 0 55.73 0zM16.273 4.451c-3.223 0-6.667.95-6.667 3.614 0 3.79 6.855 10.695 23.217 11.422-1.381-4.932-5.556-15.036-16.55-15.036zm39.459.002c-10.997 0-15.172 10.103-16.556 15.031 8.675-.391 14.146-2.513 17.295-4.32 4.369-2.507 5.925-5.31 5.925-7.1 0-2.664-3.441-3.61-6.664-3.61z"
                fill="#FDD6BA"
              />
            </svg>
          </div>
          <div className="text-content">
            <h1>Exclusive benefits</h1>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className="CardModel col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="SvgImage">
            <svg width="75" height="75" viewBox="0 0 73 50">
              <path
                d="M55.385 37.5c3.435 0 6.23 2.804 6.23 6.25S58.82 50 55.385 50c-3.436 0-6.231-2.804-6.231-6.25s2.795-6.25 6.23-6.25zm-38.77 0c3.436 0 6.231 2.804 6.231 6.25S20.051 50 16.616 50c-3.436 0-6.231-2.804-6.231-6.25s2.795-6.25 6.23-6.25zm40.87 4.143h-4.2v4.214h4.2v-4.214zm-38.77 0h-4.2v4.214h4.2v-4.214zM48.463 0v35.397a10.497 10.497 0 00-3.652 7.659H27.05c-.165-5.647-4.787-10.19-10.448-10.19-5.662 0-10.283 4.543-10.449 10.19H0V29.12h11.77a2.736 2.736 0 002.726-2.739 2.736 2.736 0 00-2.727-2.738H8.345v-4.23h17.92a2.736 2.736 0 002.728-2.738 2.736 2.736 0 00-2.727-2.74H0V9.708h16.602a2.736 2.736 0 002.726-2.739c0-1.459-1.352-2.739-2.894-2.739h-3.307V0h35.335zM72 23.611v19.445h-6.216c-.167-5.656-4.836-10.207-10.556-10.207-.901 0-1.777.114-2.613.326v-9.564H72zM4.154 19.444v4.167H0v-4.167h4.154zM61.062 4.861l9.553 14.583h-18V4.861h8.447zM9 0v4.167H4.846V0H9z"
                fill="#FDD6BA"
              />
            </svg>
          </div>
          <div className="text-content">
            <h1>Free shipping</h1>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
      {/* How IT works  */}
      <div className=" HowItWorksSegment container">
        <h1 className="forMobile">How it works</h1>
        <div className="subscription-steps">
          <div className="steps-row">
            <div className="progress-line"></div>
            <div className="step">
              <div className="step-circle"></div>
            </div>
            <div className="step">
              <div className="step-circle"></div>
            </div>
            <div className="step">
              <div className="step-circle"></div>
            </div>
          </div>

          <div className="steps-row row">
            <div className="step col-md-4 col-12 mb-4">
              <h1 className="bigTitle">01</h1>
              <h1 className="smallerTitle">Pick your coffee</h1>
              <p>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>

            <div className="step col-md-4 col-12 mb-4">
              <h1 className="bigTitle">02</h1>
              <h1 className="smallerTitle">Choose the frequency</h1>
              <p>
                Customize your order frequency, quantity even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>

            <div className="step col-md-4 col-12 mb-4">
              <h1 className="bigTitle">03</h1>
              <h1 className="smallerTitle">Receive and enjoy!</h1>
              <p>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </div>
        <button className="button" onClick={createYourPlan}>
          Create your plan
        </button>
      </div>

      <Bottom />
    </div>
  );
}
