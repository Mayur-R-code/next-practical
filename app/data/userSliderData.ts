export interface UserCardData {
  id: number;
  name: string;
  image: string;
  desc: string;
}

export const userSliderData: UserCardData[] = [
  {
    id: 1,
    name: "Alex Carter",
    image: "/img2.jpg",
    desc: "With over a decade in fitness, Alex specializes in strength training. Certified by NASM, he designs challenging yet achievable workout programs. His passion is helping clients build strength and confidence through personalized routines. Outside the gym, Alex enjoys running and outdoor adventures.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "/img4.png",
    desc: "With over a decade in fitness, Sarah specializes in strength training. Certified by NASM, he designs challenging yet achievable workout programs. His passion is helping clients build strength and confidence through personalized routines. Outside the gym, Sarah enjoys running and outdoor adventures.",
  },
  {
    id: 3,
    name: "Mark Lee",
    image: "/img3.png",
    desc: "With over a decade in fitness, Mark specializes in strength training. Certified by NASM, he designs challenging yet achievable workout programs. His passion is helping clients build strength and confidence through personalized routines. Outside the gym, Mark enjoys running and outdoor adventures.",
  },
];

export const commentsData = [
  {
    id: 1,
    name: "Kang Haerin",
    avatar: "/img4.png",
    date: "22 Jul 2022",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/img4.png",
    date: "10 Aug 2022",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
  },
];
