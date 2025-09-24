import Button from "../Button";

export default function Home() {
  return (
    <>
      <section className="grid place-content-center space-y-4 mt-8">
        <div className="space-y-2">
          <h2 className="font-bold text-6xl text-center">
            Retrouvez vos objets perdus
          </h2>
          <h2 className="font-bold text-6xl text-center">en toute sécurité</h2>
          <p className="text-[#5c636e] text-center">
            Publie, match et retrouve - juste en quelques clics
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button text="Publier un objet" style="bg-blue-600 text-white" />
          <Button
            text="Signaler un objet trouvé"
            style="bg-[#152949] text-blue-600"
          />
        </div>
      </section>

      <section className="grid space-y-2 mt-4">
        <div>
          <div className="p-2 grid grid-cols-2 backdrop-blur-3xl bg-blue-500/50">
            <ul className="flex flex-col gap-2 justify-between">
              <li className="font-[Indie_Flower] text-3xl">L'effet RetiHub</li>
              <li className="text-3xl">
                <span className="text-2xl">*</span> Décrit l'objet perdu
              </li>
              <li className="text-3xl">
                <span className="text-2xl">*</span> Publie sur le hub 
              </li>
              <li className="text-3xl">
                <span className="text-2xl">*</span> Et laisse la magie opérer
              </li>
            </ul>
            <p>
              <img
                width={300}
                className="rounded"
                src="/assets/landing-page-img-1.png"
                alt="illustration image"
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
