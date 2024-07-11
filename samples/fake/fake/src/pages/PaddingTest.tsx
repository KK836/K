import { Title } from "../components";
import * as D from "../data";

const sentense = D.randomSentence(10);

export default function PaddingTest() {
  return (
    <section className="mt-4">
      <Title>PaddingTest</Title>
      <div className="p-8 border-gray-900 m-4 ">
        <div className="text-red bg-sky-600">
          <p>{sentense}</p>
        </div>
        <div className="p-8 text-white bg-orange-600">
          <p className="text-white">{sentense}</p>
        </div>
      </div>
    </section>
  );
}
