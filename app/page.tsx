import Counter from "./components/counter/Counter";

export default function Home() {
  return (
    <>
      <section className="container mx-auto p-4 md:p-8">
        <h1>Redux - RTK</h1>
        <h2>Como trabalhar com Redux</h2>
        <hr className="my-10 h-1 bg-gray-600 border-0 rounded" />
        <Counter />
        <hr className="my-10 h-1 bg-gray-600 border-0 rounded" />
      </section>
    </>
  );
}
