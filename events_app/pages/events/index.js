import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>EventPage</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
