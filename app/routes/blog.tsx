import { posts } from "../data/posts";

export default function BlogList() {
  return (
    <section className="px-20 py-16">
      <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">
        Blog
      </h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-6 border rounded-xl shadow hover:bg-gray-50"
          >
            <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
