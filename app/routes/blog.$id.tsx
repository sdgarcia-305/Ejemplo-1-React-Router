import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post)
    return 
        <p className="text-center text-xl mt-20">
            Artículo no encontrado
        </p>;

  return (
        <section className="px-20 py-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
                {post.title}
            </h1>
                <p className="text-gray-400 mb-10">
                    {post.date}
                </p>
            <article className="prose prose-lg text-gray-700">
                {post.content}
            </article>
        </section>
    );
}
