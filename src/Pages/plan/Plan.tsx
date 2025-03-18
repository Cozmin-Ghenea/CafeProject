import { Bottom } from "../../Component/Bottom";
import { Menu } from "../../Component/Menu";
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

      <div className="PlanSegment">
        <div className="container-wrapper">
          <div className="container">
            <span className="dot"></span>
            <h1 className="bigTitle">01</h1>
            <h1 className="smallerTitle">Pick your coffe</h1>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="container">
            <span className="dot"></span>
            <h1 className="bigTitle">02</h1>
            <h1 className="smallerTitle">Choose the frequency</h1>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="container">
            <span className="dot"></span>
            <h1 className="bigTitle">03</h1>
            <h1 className="smallerTitle">Receive and enjoy!</h1>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
          <div className="line"></div>
        </div>
      </div>

      {/* Bottom */}
      <Bottom />
    </div>
  );
}
