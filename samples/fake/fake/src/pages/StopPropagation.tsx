import { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    console.log(
      "click event bubbles on <div> , isTrusted, target, bubbles, currentTarget"
    );
  };
  const onButtonClick = (e: SyntheticEvent) => {
    console.log(
      "click event bubbles on <Button> , isTrusted, target, bubbles, currentTarget"
    );
    e.stopPropagation();
  };
  return (
    <div onClick={onDivClick}>
      <p> stopPropagation </p>
      <button onClick={onButtonClick}>
        click Me and stop event propagation
      </button>
    </div>
  );
}
