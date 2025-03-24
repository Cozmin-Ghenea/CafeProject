import { useState, useEffect, useRef } from "react";
import "./TheFunPart.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function CoffeeSelection() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const [selectedButtons, setSelectedButtons] = useState<{
    [key: string]: string;
  }>({});
  const [isSticky, setIsSticky] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  function allKeysHaveValues(obj: { [key: string]: string }): boolean {
    const hasAllValues = Object.values(obj).every((value) => value !== "");
    const requiredLength = isGrindDisabled ? 4 : 5;

    return hasAllValues && Object.keys(obj).length === requiredLength;
  }

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".coffee-selection-container");
      const leftSide = document.querySelector(".leftSideHardPart");

      if (container && leftSide) {
        const containerRect = container.getBoundingClientRect();
        const leftSideRect = leftSide.getBoundingClientRect();

        setIsSticky(
          containerRect.top <= 10 && containerRect.bottom > leftSideRect.height
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (sectionId: string) => {
    setOpenSections((prevSections) =>
      prevSections.includes(sectionId)
        ? prevSections.filter((id) => id !== sectionId)
        : [...prevSections, sectionId]
    );

    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleSelect = (sectionId: string, option: string) => {
    setSelectedButtons((prevSelected) => ({
      ...prevSelected,
      [sectionId]: prevSelected[sectionId] === option ? "" : option,
    }));
  };

  const isGrindDisabled = selectedButtons["Preferences"] === "Capsule";

  let exists = Object.keys(selectedButtons).includes("Grind Option");

  function useTypingEffect(text: string = "____", speed = 100) {
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
      if (!text || text === "undefined") {
        setTypedText("____");
        return;
      }

      let i = 0;
      let newText = "";

      function typeChar() {
        if (i < text.length) {
          newText += text[i];
          setTypedText(newText);
          i++;
          setTimeout(typeChar, speed);
        }
      }

      setTypedText("");
      typeChar();
    }, [text]);

    return typedText;
  }

  const Preferences = useTypingEffect(selectedButtons["Preferences"] ?? "____");
  const Bean = useTypingEffect(selectedButtons["Bean Type"] ?? "____");
  const Quantity = useTypingEffect(selectedButtons["Quantity"] ?? "____");
  const Grind = useTypingEffect(selectedButtons["Grind Option"] ?? "____");
  const Deliveries = useTypingEffect(selectedButtons["Deliveries"] ?? "____");

  useEffect(() => {
    if (exists && isGrindDisabled) {
      setOpenSections((prevSections) =>
        prevSections.filter((id) => id !== "Grind Option")
      );

      setSelectedButtons((prevSelected) => {
        const updatedButtons = { ...prevSelected };
        delete updatedButtons["Grind Option"];
        return updatedButtons;
      });
    }
  }, [selectedButtons]);
  console.log(selectedButtons);
  return (
    <div className="coffee-selection-container">
      <div className={`leftSideHardPart ${isSticky ? "sticky" : ""}`}>
        {[
          { id: "Preferences", label: "Preferences" },
          { id: "Bean Type", label: "Bean Type" },
          { id: "Quantity", label: "Quantity" },
          { id: "Grind Option", label: "Grind Option" },
          { id: "Deliveries", label: "Deliveries" },
        ].map((item, index) => (
          <h1
            key={index}
            className={`${
              item.id === "Grind Option" && isGrindDisabled
                ? "disabled"
                : openSections.includes(item.id)
                  ? "active"
                  : "inactive"
            }`}
            onClick={() => {
              if (item.id !== "Grind Option" || !isGrindDisabled) {
                toggleSection(item.id);
              }
            }}
          >
            <span
              className={
                openSections.includes(item.id) ? "openOption" : "pendingOption"
              }
            >{`0${index + 1}`}</span>
            {item.label}
          </h1>
        ))}
      </div>

      <div className="rightSideHardPart">
        {[
          {
            id: "Preferences",
            title: "How do you drink your coffee?",
            options: ["Capsule", "Filter", "Espresso"],
            smallText: [
              "Compatible with Nespresso systems and similar brewers",
              "For pour over or drip methods like Aeropress, Chemex, and V60",
              "Dense and finely ground beans for an intense, flavorful experience",
            ],
          },
          {
            id: "Bean Type",
            title: "What type of coffee?",
            options: ["Single Origins", "Decaf", "Blended"],
            smallText: [
              "Distinct, high quality coffee from a specific family-owned farm",
              "Just like regular coffee, except the caffeine has been removed",
              "Combination of two or three dark roasted beans of organic coffees",
            ],
          },
          {
            id: "Quantity",
            title: "How much would you like?",
            options: ["250g", "500g", "1000g"],
            smallText: [
              "Perfect for the solo drinker. Yields about 12 delicious cups.",
              "Perfect option for a couple. Yields about 40 delectable cups.",
              "Perfect for offices and events. Yields about 90 delightful cups.",
            ],
          },
          {
            id: "Grind Option",
            title: "Want us to grind them?",
            options: ["Wholebean", "Filter", "Cafetiére"],
            smallText: [
              "Best choice if you cherish the full sensory experience",
              "For drip or pour-over coffee methods such as V60 or Aeropress",
              "Course ground beans specially suited for French press coffee",
            ],
          },
          {
            id: "Deliveries",
            title: "How often should we deliver?",
            options: ["Every week", "Every 2 weeks", "Every month"],
            smallText: [
              "$7.20 per shipment. Includes free first-class shipping.",
              "$9.60 per shipment. Includes free priority shipping.",
              "$12.00 per shipment. Includes free priority shipping.",
            ],
          },
        ].map((section) => (
          <div
            key={section.id}
            className="section"
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
          >
            <div
              className="title-container"
              onClick={() => toggleSection(section.id)}
            >
              <h1 className="title">{section.title}</h1>
              {openSections.includes(section.id) ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <div
              className={`options ${openSections.includes(section.id) ? "show" : "hide"}`}
            >
              {section.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedButtons[section.id] === option ? "selected" : ""}`}
                  onClick={() => handleSelect(section.id, option)}
                  disabled={section.id === "Grind Option" && isGrindDisabled}
                >
                  <h1 className="bigger-text">{option}</h1>
                  <p className="small-text">{section.smallText[index]}</p>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Conclusion Part */}
        <div className="conclusion">
          <p> ORDER SUMMARY</p>
          <h1>
            “I drink my coffee using {!isGrindDisabled && "as "}
            <span>{Preferences}</span>, with a <span>{Bean}</span> type of bean.
            <span>{Quantity}</span>{" "}
            {!isGrindDisabled ? (
              <>
                ground ala <span>{Grind}</span>,
              </>
            ) : null}
            sent to me <span>{Deliveries}</span>.”
          </h1>
        </div>
        <button
          className="conclusionButton"
          disabled={allKeysHaveValues(selectedButtons) ? false : true}
        >
          Create my plan!
        </button>
      </div>
    </div>
  );
}
