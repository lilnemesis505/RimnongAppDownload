// app/page.tsx
import Image from "next/image";

export default function Home() {
  const MEDIAFIRE_LINK = "https://www.mediafire.com/file/tihbixxq4e1k9tj/RimnongCafe.apk/file";
  const GDRIVE_LINK = "https://drive.google.com/file/d/10cOABjop8_6zNCTWTLE7xq7jB8QSKh4t/view?usp=sharing";

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* --- ส่วนพื้นหลัง (Background) --- */}
      {/* ใส่รูปชื่อ banner.jpg ในโฟลเดอร์ public */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.jpg" 
          alt="Rimnong Cafe Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay สีดำจางๆ 50% เพื่อให้อ่านตัวหนังสือออก */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* --- ส่วนเนื้อหา (Content) --- */}
      <div className="relative z-10 w-full max-w-2xl text-center space-y-8 animate-fade-in-up">
        
        {/* หัวข้อและคำอธิบาย */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-[#915204] drop-shadow-xl tracking-wide">
            Rimnong Cafe
          </h1>
          
          <div className="space-y-2 text-gray-100">
            <h2 className="text-xl md:text-2xl font-medium">
              ร้านกาแฟเล็กๆข้างหนองสะเรียง
            </h2>
            <p className="text-gray-300 font-light max-w-lg mx-auto">
              ไม่ต้องเดินมาสั่งที่หน้าร้านเองกดสั่งผ่านแอพพลิเคชั่นบนมือถือได้เลย <br className="hidden md:block"/>
              รองรับการใช้งานในส่วนของ <strong>Android</strong> ขอบคุณที่มาใช้บริการค่ะ
            </p>
          </div>
        </div>

        {/* ปุ่มดาวน์โหลด */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          
          {/* ปุ่มหลัก: MediaFire */}
          <a
            href={MEDIAFIRE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[240px] bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-900/30 transform hover:scale-105 transition-all duration-200"
          >
            ดาวน์โหลด (MediaFire)
          </a>

          {/* ปุ่มสำรอง: Google Drive */}
          <a
            href={GDRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[240px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200"
          >
            ลิงก์สำรอง (Google Drive)
          </a>
        </div>

        {/* Footer เล็กๆ */}
        <div className="pt-8 text-xs text-gray-400 opacity-80">
          <p>Version 1.0.0 • Updated 2024</p>
          <p>Secure Download • Verified by Google Drive And Mediafile</p>
        </div>

      </div>
    </main>
  );
}