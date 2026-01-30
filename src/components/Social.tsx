import { social } from "@/lib/data";

const Social = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-1 items-center">
        {social.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="bg-foreground w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-secondary"
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Social;
