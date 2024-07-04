import { ChangeEvent } from "react";

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onChangeValue", e.target.value);
  };
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeChecked", e.target.value);
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles", e.target.value);
  };
  return (
    <div>
      <p>OnChange</p>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="enter some texts"
        defaultValue={"hello"}
      />
      <input
        type="checkbox"
        onChange={onChangeChecked}
        placeholder="enter some checkbox"
        defaultChecked
      />
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    </div>
  );
}
