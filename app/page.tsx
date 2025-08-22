import Counter from "./components/counter/Counter";
import PostList from "./components/posts/PostList";
import TodoList from "./components/toDo/TodoList";

export default function Home() {
  return (
    <>
      <section className="container mx-auto p-4 md:p-8">
        <h1>Redux - RTK</h1>
        <h2>Como trabalhar com Redux</h2>
        <hr className="my-10 h-1 bg-gray-600 border-0 rounded" />
        <Counter />
        <hr className="my-10 h-1 bg-gray-600 border-0 rounded" />
        <TodoList/>
        <hr className="my-10 h-1 bg-gray-600 border-0 rounded" />
        <PostList />
      </section>
    </>
  );
}
