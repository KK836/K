import type { ChangeEvent } from "react";

export default function CopyMe() {
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        // 초기값, 조건식, 증감식
        const file: File | null = files.item(i);
        console.log("file[${i}]", file);
      }
    }
  };
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  );
}
