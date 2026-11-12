import Apparition from './Apparition'
export default function TitreSection({ titre, sous }) {
  return (
    <Apparition className="mb-14 text-center">
      <h2 className="text-3xl font-bold sm:text-5xl"><span className="degrade">{titre}</span></h2>
      {sous && <p className="mx-auto mt-4 max-w-xl text-sec">{sous}</p>}
    </Apparition>
  )
}
