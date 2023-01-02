import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        categories: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.categories;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    props: { data, pageName: id },
  };
}

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref={true}>
          <Image width={200} height={200} alt={ev.title} src={ev.image} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default EventsCatPage;

// /events/[eventsPerCity]/[event]
