import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getPostBySlug } from "@/app/mock/posts";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostParams {
  params: {
    slug: string;
  };
}

const SinglePost = ({ params }: PostParams) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mim-h-screen bg-background flex flex-col">
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/vehicles"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Voltar
        </Link>
        <article>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none pt-6">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
          </Card>
        </article>
        <div className="mt-12 text-center">
          <Link href="/vehicles">
            <Button>Veja outras opções</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SinglePost;
