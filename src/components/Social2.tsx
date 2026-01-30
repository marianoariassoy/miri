import { social } from "@/lib/data";

const Social = () => {
  return (
    <nav>
      <ul className="flex gap-x-2 justify-center lg:justify-start">
        {social.slice(1, 4).map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="bg-white w-12 h-12 text-xl flex items-center justify-center rounded-full text-foreground hover:bg-secondary hover:text-white"
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
