import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import { posts } from "./-journal-posts";

export const Route = createFileRoute("/journal/$slug")({
  component: JournalPost,
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
});

function JournalPost() {
  const { slug } = Route.useLoaderData();
  const post = posts.find((p) => p.slug === slug)!;
  
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero 
        eyebrow={`JOURNAL — ${post.date} — ${post.category}`}
        title={post.title}
        intro={post.excerpt}
        video={post.video}
        img={post.img}
      />
      <article className="py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="prose prose-invert prose-lg font-sans leading-loose text-white/80">
            {post.content}
          </div>
        </div>
      </article>

      <CrossLink to="/journal" eyebrow="Archive" title="More Dispatches →" />
      <Footer />
    </main>
  );
}
