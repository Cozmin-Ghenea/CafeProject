import { Bottom } from "../../components/Bottom";
import { Menu } from "../../components/Menu";
import TheFunPart from "../../components/TheFunPart";
import "./Plan.scss";
export function Plan() {
  return (
    <div className="container">
      {/* ------ Menu side */}
      <Menu />

      {/* CreatePlan  side */}
      <div className="CreatePlanSection">
        <h1>Create plan</h1>
        <p className="smallDescription">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
      </div>

      {/* Planning */}

      <div className=" PlanSegment container">
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

          <div className="steps-row">
            <div className="step">
              <h1 className="bigTitle">01</h1>
              <h1 className="smallerTitle">Pick your coffee</h1>
              <p>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>

            <div className="step">
              <h1 className="bigTitle">02</h1>
              <h1 className="smallerTitle">Choose the frequency</h1>
              <p>
                Customize your order frequency, quantity even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>

            <div className="step">
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
      </div>

      {/* The Complicated Part */}
      {/* <div className="selectYourCoffePart">
        <div className="leftSide"></div>
       

        <div className="rightSide">
          <div className="Preferences">
            <h1>How do you drink your coffe </h1>
            <button className="first">
              <h1>Capsule</h1>
              <p>Compatible with Nespresso systems and similar brewers</p>
            </button>
            <button className="second">
              <h1>Filter</h1>
              <p>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </button>
            <button className="third">
              <h1>Expresso</h1>
              <p>
                Dense and finely ground beans for an intense, flavorful
                experience
              </p>
            </button>
          </div>
          <div className="BeanType">
            <h1>What type of coffee? </h1>
            <button className="first">
              <h1>Single Origins</h1>
              <p>
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </button>
            <button className="second">
              <h1>Decaf</h1>
              <p>
                Just like regular coffee, except the caffeine has been removed
              </p>
            </button>
            <button className="third">
              <h1>Blended</h1>
              <p>
                Combination of two or three dark roasted beans of organic
                coffees
              </p>
            </button>
          </div>
          <div className="Quantity">
            <h1>How much would you like? </h1>
            <button className="first">
              <h1>250g</h1>
              <p>
                Perfect for the solo drinker. Yields about 12 delicious
                cups.{" "}
              </p>
            </button>
            <button className="second">
              <h1>300g</h1>
              <p>
                Perfect option for a couple. Yields about 40 delectable
                cups.{" "}
              </p>
            </button>
            <button className="third">
              <h1>1000g</h1>
              <p>
                Perfect for offices and events. Yields about 90 delightful cups.
                coffees
              </p>
            </button>
          </div>
          <div className="GrindOption ">
            <h1>Want us to grind them?</h1>
            <button className="first">
              <h1>Wholebean</h1>
              <p>Best choice if you cherish the full sensory experience</p>
            </button>
            <button className="second">
              <h1>Filter</h1>
              <p>
                For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </button>
            <button className="third">
              <h1>Cafetiére</h1>
              <p>
                Course ground beans specially suited for french press coffee
              </p>
            </button>
          </div>
          <div className="Deliveries">
            <h1>Every week</h1>
            <button className="first">
              <h1>Wholebean</h1>
              <p>$7.20 per shipment. Includes free first-class shipping.</p>
            </button>
            <button className="second">
              <h1>Every 2 weeks</h1>
              <p>$9.60 per shipment. Includes free priority shipping. </p>
            </button>
            <button className="third">
              <h1>Every month</h1>
              <p>$12.00 per shipment. Includes free priority shipping. </p>
            </button>
          </div>
        </div>
      </div> */}
      <TheFunPart />
      {/* Bottom */}
      <Bottom />
    </div>
  );
}
