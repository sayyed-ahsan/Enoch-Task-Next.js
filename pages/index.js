import { useEffect, useState } from "react"
import Card from "../components/card";

export default function Home() {

  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('cardDetails.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  return (
    <div className="flex flex-wrap max-w-[1000px] mx-auto">
      {
        cards.map(card => <Card card={card}></Card>)
      }
    </div>
  )
}
