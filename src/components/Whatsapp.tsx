import { Whatsapp } from "@/lib/icons";

const WhatsappModule = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 lg:right-8 bottom-12 z-40 text-white text-3xl bg-foreground rounded-full flex items-center justify-center p-2 shadow-xl opacity-0 animate-jump-in hover:bg-secondary"
    >
      <Whatsapp />
    </a>
  );
};

export default WhatsappModule;
