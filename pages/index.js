import Image from "next/image";

function Home() {
  return (
    <div className="grid place-content-center min-h-screen bg-gradient-to-b from-[#4e89a2] to-[#70babd]">
      <figure>
        <Image
          className="rounded-full shadow-lg shadow-white/20"
          src="https://i.ibb.co/CM835pH/DALL-E-2024-11-25-15-17-57-A-vibrant-and-modern-Under-Construction-illustration-for-a-website-titled.webp"
          alt="DALL-E-2024-11-25-15-17-57-A-vibrant-and-modern-Under-Construction-illustration-for-a-website-titled"
          width={500}
          height={500}
          border="0"
        />
      </figure>
    </div>
  );
}

export default Home;
