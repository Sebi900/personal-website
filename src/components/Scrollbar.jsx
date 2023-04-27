import Image from "next/image";
import firstpic from "../images/image1.jpg";
import secondpic from "../images/image2.jpg";
import thirdpic from "../images/image3.jpg";
import fourthpic from "../images/image4.jpg";

export default function Scrollbar() {
  const track = document.getElementById("image-track");

  const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track?.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track?.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track?.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  /* -- Had to add extra lines for touch events -- */

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <div>
      <div
        id="image-track"
        className="image"
        data-mouse-down-at="0"
        data-perv-percentage="0"
      >
        <Image src={firstpic} alt={""} className="image" draggable="false" />
        <Image src={secondpic} alt={""} className="image" draggable="false" />
        <Image src={thirdpic} alt={""} className="image" draggable="false" />
        <Image src={fourthpic} alt={""} className="image" draggable="false" />
      </div>
    </div>
  );
}
