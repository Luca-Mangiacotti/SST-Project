import TravelData from "../data/TravelData";

export default function HomePage() {
  return (
    <>
      {TravelData.map((travel) => (
        <div className="" key={travel.id}>
          <h1>{travel.destination}</h1>
          <h3>Data di inizio: {travel.departure_date}</h3>
          <h3>Data di ritorno: {travel.return_date}</h3>
        </div>
      ))}
    </>
  );
}
