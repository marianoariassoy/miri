export interface Home {
  id: number;
  image: string;
}

export interface Kit {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

export interface Portfolio {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image: string;
  slug: string;
  images: Image[];
}

interface Image {
  id: number;
  image: string;
  portrait: boolean;
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}
