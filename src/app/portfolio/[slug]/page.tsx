import Content from "@/components/Content";
import { Portfolio } from "@/types";

async function getServerSideProps(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = (await getServerSideProps(slug)) as Portfolio;
  if (!data) return null;

  return (
    <Content title="" bgColor="light">
      <h1 className="font-bold text-2xl">{data.title}</h1>
      {data.subtitle && (
        <h2 className="text-xl font-semibold">{data.subtitle}</h2>
      )}
      <p className="whitespace-break-spaces">{data.text} </p>
      <div className="flex flex-col gap-y-4">
        {data.images.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={data.title}
            className="w-full h-full object-cover object-center"
          />
        ))}
      </div>
    </Content>
  );
};

export default Page;
