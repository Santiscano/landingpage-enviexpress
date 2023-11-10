import { useState } from "react"

interface Topping {
  title: string;
  paragraph: string;
}
const toppings: Topping[] = [
  {title:"Rastrear",  paragraph: "mensaje explicativo"},
  {title:"Cotiza",    paragraph: "mensaje explicativo 2"},
];

const Accordion = () => {
  const [isChecked, setIsChecked] = useState(
    [true, true]
  );

  const handleOnChange = (position: number) => {
    // @ts-ignore
    // setIsChecked(!isChecked[position])

    setIsChecked((prevChecked) => {
      // Crear una copia del array existente
      const newChecked = [...prevChecked];
      // Modificar el valor en la posición deseada
      newChecked[position] = !newChecked[position];
      // Devolver el nuevo array como nuevo estado
      return newChecked;
    })
  };

  return (
    <div className="accordion-menu">
      <ul>
        {toppings.map(({title, paragraph}, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={isChecked[index]}
              onChange={() => handleOnChange(index)}
            />
            <i className="arrow"></i>
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accordion
