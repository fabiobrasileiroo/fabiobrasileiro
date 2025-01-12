import { Typewriter } from "@/components/ui/typewriter"

export function Description() {
  return (
    <div className="max-md:w-[260px] max-lg:w-[470px] m-auto h-full md:text-xl lg:text-2xl sm:text-lg text-base flex flex-row items-start justify-start font-normal overflow-hidden p-4 pt-4">
      <div className="whitespace-pre-wrap">
        <span>{"Bem-vindo(a)! "}</span>
        <Typewriter
          text={[
            "Desenvolvedor Full Stack 👨‍💻",
            // "Especialista em React e Node.js 🚀",
            "Apaixonado por tecnologia 💡",
            "E por eventos e comunidades 💡",
            "Diretamente de Manaus-AM 🌳",
          ]}
          speed={70}
          className="text-blue-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </div>
    </div>
  )
}

