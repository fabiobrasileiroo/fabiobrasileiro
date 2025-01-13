import { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast"; // ✅ Corrigido o import
// import { ToastAction } from "@/components/ui/toast"

export default function TerminalCommand() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast(); // ✅ Correto uso do hook

  const handleCopy = () => {
    navigator.clipboard.writeText("npx fabio-brasileiro");
    setCopied(true);

    // Exibe o Toast de feedback
    toast({
      title: "✅ Comando copiado!",
      description: "O comando 'npx fabio-brasileiro' foi copiado com sucesso!",
      duration: 3000,
    });
    // toast({
    //   title: "Scheduled: Catch up ",
    //   description: "Friday, February 10, 2023 at 5:57 PM",
    //   action: (
    //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    //   ),
    // })


    // Reseta o botão após 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="relative bg-gray-900 text-green-400 font-mono text-sm md:text-base px-6 py-4 rounded-lg shadow-lg w-auto">
        {/* Botões de controle do terminal */}
        <p className="flex items-center mb-2">
          <span className="text-red-500">●</span>
          <span className="text-yellow-500 ml-1">●</span>
          <span className="text-green-500 ml-1">●</span>
        </p>

        {/* Comando no terminal */}
        <p className="mt-2">
          <span className="text-cyan-400">➜</span> <span className="text-white"> ~ </span>
          <span className="animate-typing text-cyan-400 overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 pr-2">
            npx fabio-brasileiro
          </span>
        </p>

        {/* Botão de copiar */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded hover:bg-gray-700 transition"
          title="Copiar comando"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-400" />
          ) : (
            <ClipboardCopy className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
