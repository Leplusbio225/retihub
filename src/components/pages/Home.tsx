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
          <p className="text-[#5c636e]  text-center">
            Publie, match et retrouve - juste en quelques clics
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button text="Publier un objet" style="bg-blue-600 text-white" />
          <Button
            text="Signaler un objet trouvé"
            style="bg-[#152949] text-[#BF6BC7] border-[#BF6BC7] border-1"
          />
        </div>
      </section>

      <section className="grid space-y-2 mt-8 p-2">
        <div className="p-2">
          <div className="grid backdrop-blur-3xl bg-blue-500/30 rounded p-8">
            <p className="text-shadow-xs text-shadow-black text-xl  font-light text-center uppercase">Tout le processus en 03 actions. Pas plus !</p>
            <ul className="grid grid-cols-3 gap-2 p-4 space-y-4 mt-8 justify-between">
              <li className="text-sm text-center space-y-2 ">
                <span className="flex items-center">
                  <img width={20} src="/assets/svg/phone.svg" alt="phone svg" />
                  Publier un objet perdu
                </span>
                <img
                  width={300}
                  className="rounded"
                  src="/assets/landing-page-img-1.png"
                  alt="illustration image"
                />
                <p className="text-shadow-xs text-shadow-black text-white text-xl font-bold">
                  1
                </p>
              </li>
              <li className="text-sm text-center space-y-2">
                <span className="flex items-center">
                  <img
                    width={20}
                    src="/assets/svg/notification.svg"
                    alt="phone svg"
                  />
                  Recevoir des notifications de matching
                </span>
                <img
                  width={300}
                  className="rounded"
                  src="/assets/matching.png"
                  alt="illustration image"
                />
                <p className="text-shadow-xs text-shadow-black text-white text-xl font-bold">
                  2
                </p>
              </li>
              <li className="text-sm text-center space-y-2">
                <span className="flex items-center">
                  <img width={20} src="/assets/svg/match.svg" alt="phone svg" />
                  Retrouver l'objet perdu
                </span>
                <img
                  width={300}
                  className="rounded"
                  src="/assets/finding.png"
                  alt="illustration image"
                />
                <p className="text-shadow-xs text-shadow-black text-white text-xl font-bold">
                  3
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
