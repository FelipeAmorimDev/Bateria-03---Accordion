import { useState } from 'react'

const faqs = [
  {
    id: crypto.randomUUID(),
    title: 'Quem é a maior celebridade do mundo dos games no BR?',
    answer: 'A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Onde fica a europa da américa do sul?',
    answer: 'Argentina. BR vive como rei em Buenos Aires.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Qual é a grande oportunidade para desenvolvedores BR?',
    answer: 'Aproveitar a alta demanda pra ganhar em dólar ou euro.',
  },
]

export function Item({ title, answer, i, accordionOpened, onAcordionOpened}) {
  const index = i + 1

  return (
    <li className={`item ${accordionOpened === index ? "active" : ""}`} onClick={() => accordionOpened === index ? onAcordionOpened(0) : onAcordionOpened(i + 1)}>
      <p className="number">{index}</p>
      <h2 className="title">{title}</h2>
      <p className="icon">{accordionOpened === index ? "-" : "+"}</p>
      {accordionOpened === index && <div className="content-box">{answer}</div>}
    </li>
  )
}

export function App() {
  const [accordionOpened, setAccordionOpened] = useState(0)

  const handleOpenAccordion = (index) => setAccordionOpened(index)

  return (
    <>
      <ul className="accordion">
        {faqs.map((faq, i) => (
          <Item 
            key={faq.id} 
            title={faq.title}
            answer={faq.answer}
            i={i}
            accordionOpened={accordionOpened}
            onAcordionOpened={handleOpenAccordion}/>
          ))}
      </ul>
    </>
  )
}