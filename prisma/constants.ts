export const categories = [
  {
    name: 'Pizzen',
  },
  {
    name: 'Frühstück',
  },
  {
    name: 'Snacks',
  },
  {
    name: 'Cocktails',
  },
  {
    name: 'Getränke',
  },
];

export const _ingredients = [
  {
    name: 'Käserand',
    price: 1.79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Cremige Mozzarella',
    price: 1.79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Cheddar- und Parmesan-Käse',
    price: 1.79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Scharfe Jalapeño',
    price: 1.59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Zartes Hähnchen',
    price: 1.79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Champignons',
    price: 1.59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Schinken',
    price: 1.79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Würzige Peperoni',
    price: 1.79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Scharfe Chorizo',
    price: 1.79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Eingelegte Gurken',
    price: 1.59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Frische Tomaten',
    price: 0.59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Rote Zwiebeln',
    price: 1.59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Saftige Ananas',
    price: 1.59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Italienische Kräuter',
    price: 1.39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Süße Paprika',
    price: 1.59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Feta-Würfel',
    price: 1.79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Meatballs',
    price: 1.79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Omelett mit Schinken und Pilzen',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
    categoryId: 2,
  },
  {
    name: 'Omelett mit Peperoni',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
    categoryId: 2,
  },
  {
    name: 'Kaffee Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 2,
  },
  {
    name: 'Denwich mit Schinken und Käse',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
    categoryId: 3,
  },
  {
    name: 'Hähnchen-Nuggets',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
    categoryId: 3,
  },
  {
    name: 'Ofenkartoffel mit Sauce 🌱',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
    categoryId: 3,
  },
  {
    name: 'Scharfer Dodster 🌶️🌶️',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 3,
  },
  {
    name: 'Bananen-Milchshake',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
    categoryId: 4,
  },
  {
    name: 'Karamell-Apfel-Milchshake',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
    categoryId: 4,
  },
  {
    name: 'Milchshake mit Oreo-Keksen',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
    categoryId: 4,
  },
  {
    name: 'Klassischer Milchshake 👶',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
    categoryId: 4,
  },
  {
    name: 'Irischer Cappuccino',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
    categoryId: 5,
  },
  {
    name: 'Karamell-Cappuccino',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
    categoryId: 5,
  },
  {
    name: 'Kokosnuss-Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
    categoryId: 5,
  },
  {
    name: 'Kaffee Americano',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
    categoryId: 5,
  },
  {
    name: 'Kaffee Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 5,
  },
];

export const story = [
  {
    id: 1,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440.webp',
  },
  {
    id: 2,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440%20(1).webp',
  },
  {
    id: 3,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440%20(2).webp',
  },
  {
    id: 4,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440%20(3).webp',
  },
  {
    id: 5,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440%20(4).webp',
  },
  {
    id: 6,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440%20(5).webp',
  },
  {
    id: 7,
    previewImageUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/logo-350x440%20(6).webp',
  },
];

export const storyItems = [
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },

  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },
  {
    storyId: 2,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },

  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },
  {
    storyId: 3,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },

  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 4,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },

  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },
  {
    storyId: 5,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },

  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },
  {
    storyId: 6,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },

  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/0ovrnu8bsy3bymvjjltw20d8pe.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/8upg6snerjzzphyvqhevdsspkm.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/g3bb3hbarfwqly0igzaaf4c2fr.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/revyccsmyfddhl99duu9qeeug4.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/rjbslgir1uwfunvao4ocg7ijxv.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/vnpihltk3ukzqqi0kqld6ohy9x.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ha0ovg6fmnw7njynwofdvi8vie.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/7cntgzxj3c9psbhaes9qmu7aju.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ziyvh6usjceif0nywr2zeekwtm.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/unwbrdpqdjbdn2usnf0btgguuw.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/zqyjo1qykk9sqzqfnivdyk3ydf%20(1).webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/iik8321mmmnddps4rotpp2b1jv.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4hdbizxevla8igqrnojhtgg4jq.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/4ryyivaq9xijgtwa8bdge15kjy.webp',
  },
  {
    storyId: 7,
    sourceUrl:
      'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/storyItem/ewbpuriki3uvwmyxdn15lhsbzi.webp',
  },
];
