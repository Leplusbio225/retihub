export default function Navbar() {
    const navbarStyle = { textShadow: '1px 1px 1px #000' };

    return (
        <>
            <nav style={navbarStyle} className="py-2 px-4 text-xl shadow flex justify-between items-center text-white mx-2 rounded-full backdrop-blur-2xl bg-[#ffffff0d]">
                <div className="text-2xl text-blue-500 font-bold">
                    RetiHub
                </div>

                <div className="flex gap-4">
                    <a href="#">Accueil</a>
                    <a href="#">Découvrir</a>
                    <a href="#">À propos</a>
                </div>

                <div>
                    <a href="#">Mon espace</a>
                </div>
            </nav>
        </>
    )
}