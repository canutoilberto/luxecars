interface Post {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    slug: "ferrari-488-gtb",
    title: "Ferrari 488 GTB",
    image:
      "https://images.pexels.com/photos/16386035/pexels-photo-16386035/free-photo-of-vermelho-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "A Ferrari 488 GTB é um modelo superesportivo da Ferrari. Ele foi lançado em 3 de fevereiro de 2015, antes de sua estreia mundial no Salão Internacional do Automóvel de Genebra. A 488 GTB é a substituta da Ferrari 458, compartilhando várias características de design e chassis. É alimentado por um 3.9L twin turbo V8.",
  },
  {
    id: 2,
    slug: "lamborghini-huracan",
    title: "Lamborghini Huracán",
    image:
      "https://images.pexels.com/photos/17632045/pexels-photo-17632045/free-photo-of-cidade-meio-urbano-luxo-de-pe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "O Lamborghini Huracán Performante é muito mais do que apenas um carro bonito. Ele é um supercarro que combina engenharia de ponta, materiais ultraleves, um design aerodinâmico inovador e uma potência brutal. Seja nas estradas ou nas pistas, ele oferece uma experiência de condução que é difícil de superar.",
  },
  {
    id: 3,
    slug: "rolls-royce-phantom",
    title: "Rolls-Royce Phantom",
    image:
      "https://i.pinimg.com/originals/ea/c9/15/eac91546ef2ab258d73e076df200d6db.png",
    content:
      "O Rolls-Royce Phantom é um sedan de grande porte da Rolls-Royce. Custa aproximadamente 250 000 libras esterlinas ou quase R$ 2,8 milhões (Brasil), tem velocidade máxima de 240 km/h e atinge 100 km/h a partir da imobilidade em 5,7 segundos. É considerado o mais luxuoso e durável carro do mundo.",
  },
  {
    id: 4,
    slug: "bentley-continental-gt",
    title: "Bentley Continental GT",
    image:
      "https://images.pexels.com/photos/11162481/pexels-photo-11162481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "O Continental GT é um cupê de duas portas e quatro lugares que combina design requintado, desempenho excepcional e tecnologia avançada. Este modelo é movido por um motor V8 de 4,0 litros com turbocompressor duplo que oferece 542 cavalos de potência e 78.52 kgfm de torque.",
  },
  {
    id: 5,
    slug: "porsche-911-gt3-rs",
    title: "Porsche 911 GT3 RS",
    image:
      "https://images.unsplash.com/photo-1683403792821-7542e25aadcf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Os atletas sabem: o desempenho máximo exige mais do que condições perfeitas e sorte. A vontade de tornar-se mais rápido e forte a cada sessão de treino é decisiva. Questionando tudo, especialmente a si mesmo. O maior desafio é permanecer imbatível. Com essa atitude, a Porsche continua ultrapassando os limites do que é possível. Para aumentar ainda mais o desempenho nos circuitos - graças à incrível downforce e à leveza de toda a estrutura. Experimente o novo 911 GT3 RS em sua melhor forma.",
  },
  {
    id: 6,
    slug: "mercedes-maybach-s-class",
    title: "Mercedes-Maybach S-Class",
    image:
      "https://images.pexels.com/photos/27414170/pexels-photo-27414170/free-photo-of-estrada-via-natureza-ensolarado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "O Mercedes-Maybach S 680 dispõem de alto luxo, conforto e tem tanta comodidade a bordo que a viagem nele é melhor que chegar ao destino. O Mercedes-Maybach S 680 ocupa um exclusivo espaço entre modelos como Rolls-Royce Phantom e Bentley Continental.",
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
