import { CardData } from "../interface/ICardAboutUs";
import love from "../assets/Logo.svg";
import flower from "../assets/flower.png";
import hand from "../assets/hand.png";
import solidarity from "../assets/solidarity.png";

export const mockData: CardData[] = [
    {
      id: 1,
      title: "Прямая помощь",
      description:
        "Благотворительные организации дают людям возможность изменить жизнь к лучшему, пусть даже в малой степени.",
      imageUrl: hand,
    },
    {
      id: 2,
      title: "Страсть в помощи",
      description:
        "Люди, увлеченные каким-либо делом, способны принести наибольшую пользу.",
      imageUrl: solidarity,
    },
    {
      id: 3,
      title: "Влияние",
      description:
        "Ваш голос и ваши действия имеют значение, и вы можете изменить мир к лучшему.",
      imageUrl: love,
    },
    {
      id: 4,
      title: "Уменьшение бедности",
      description:
        "Когда люди собираются вместе, чтобы работать ради общего дела, они могут добиться великих свершений.",
      imageUrl: flower,
    },
  ];
  