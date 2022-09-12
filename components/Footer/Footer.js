const Footer = () => (
    <div className="h-[4.4rem] bg-gradient-to-b from-[#FCD555] to-[#FFAE29] overflow-hidden">
        <div className="w-[100%] h-[100%] bg-red-footprint bg-contain opacity-70">
        </div>
        <div className="h-[2rem] bg-footer-bg bg-contain bg-repeat mt-[-3rem] z-40 cloudAnimation">
        </div>
        <div className="w-[100%] block text-center absolute bg-[#f6f7ff] z-50">
            <p>Creators</p>
            <p>© New Universe Team</p>
            <p>Game trademarks and copyrights are properties of their respective owners. New Universe Team. © <span className="cpdate">2022</span> New Universer.</p>
            <br/>
        </div>
    </div>
)

export default Footer