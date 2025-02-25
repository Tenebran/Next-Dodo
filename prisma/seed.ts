import { Prisma } from '@prisma/client';
import { categories, _ingredients, products, story, storyItems } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const generateProductItem = ({
  productId,
  pizzaType,
  size,
  price,
  imageUrl,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
  price?: number;
  imageUrl?: string;
}) => {
  return {
    productId,
    pizzaType,
    imageUrl,
    size,
    price,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepperoni Fresh',
      description: 'Pikante Peperoni, extra Mozzarella, frische Tomaten, hauseigene Tomatensauce.',
      imageUrl:
        'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/pepironi-fresh/11ee7d61304faf5a98a6958f2bb2d260.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Käsepizza',
      description: 'Mozzarella, Cheddar- und Parmesankäse, cremige Alfredo-Sauce.',
      imageUrl:
        'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610dbefef68ade96df563888b4.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo Fresh',
      description: 'Würzige Chorizo, süße Paprika, Mozzarella, hauseigene Tomatensauce.',
      imageUrl:
        'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/chorizo/11ee7d6171059e7d8d5af72d04721d66.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza4 = await prisma.product.create({
    data: {
      name: 'Chorizo Fresh',
      description:
        'Würziges Rindfleisch, bayerische Würstchen, pikante Peperoni, Bacon, Mozzarella und hauseigene Tomatensauce',
      imageUrl:
        'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleisch-Mix/0194d4f6bbc67215a6c489e31f9b3f1c.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.filter((ingredient) => [3, 4, 8].includes(ingredient.id)),
      },
    },
  });

  const pizza5 = await prisma.product.create({
    data: {
      name: 'Bœuf Stroganoff',
      description:
        'Würziges Rindfleisch, Champignons, aromatische Pilzsoße, eingelegte Gurken, Mozzarella, rote Zwiebeln, Alfredo Spezialsoße',
      imageUrl:
        'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/B%C5%93uf%20Stroganoff/0194d4f84c22791faa0d5670e4f3f5ac.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza6 = await prisma.product.create({
    data: {
      name: 'Fleischpizza mit Adschika',
      description:
        'Würziges Rindfleisch, Champignons, aromatische Pilzsoße, eingelegte Gurken, Mozzarella, rote Zwiebeln, hauseigene Alfredo-Soße',
      imageUrl:
        'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleischpizza%20mit%20Adschika/0194d4fa7e447905be80fc6044b81c9d.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza7 = await prisma.product.create({
    data: {
      name: 'Garnelen mit süßer Chilisauce',
      description:
        'Garnelen, Ananas, süße Chilisauce, Paprika, Mozzarella, hauseigene Alfredo-Soße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194d4fd5264795e9ead873595b79062.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza8 = await prisma.product.create({
    data: {
      name: 'Doppeltes Hähnchen',
      description: 'Hähnchen, Mozzarella, hauseigene Alfredo-Soße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d614d572a8e844206649c75c132.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza9 = await prisma.product.create({
    data: {
      name: 'Schinken und Käse',
      description: 'Schinken, Mozzarella, hauseigene Alfredo-Soße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d60fe254005a3e82e36c1a6b6dd.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza10 = await prisma.product.create({
    data: {
      name: 'Schinken und Champignons',
      description: 'Schinken, Champignons, extra Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d612021428999227f0b5fbb5b40.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza11 = await prisma.product.create({
    data: {
      name: 'Julienne',
      description:
        'Hähnchen, Champignons, aromatische Pilzsoße, Zwiebeln, getrockneter Knoblauch, Mozzarella, Cheddar- und Parmesan-Käsemischung, hauseigene Alfredo-Soße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d617658a79b8d0e5bc85a380c91.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza12 = await prisma.product.create({
    data: {
      name: 'Fleischpizza',
      description:
        'Hähnchen, Schinken, pikante Peperoni, scharfe Chorizo, Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d617658a79b8d0e5bc85a380c91.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });
  const pizza13 = await prisma.product.create({
    data: {
      name: 'Burger-Pizza',
      description:
        'Schinken, eingelegte Gurken, Tomaten, rote Zwiebeln, Knoblauch, Burgersoße, Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d616a26862b8825cfce83d98f7c.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza14 = await prisma.product.create({
    data: {
      name: 'Pizza Hawaii',
      description: 'Hähnchen, Ananas, Mozzarella, hauseigene Alfredo-Soße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d617f240ef79b3ed9d1ec47b81d.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza15 = await prisma.product.create({
    data: {
      name: 'Peperoni',
      description: 'Pikante Peperoni, extra Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d610ac6710c85d092845ce0342e.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  const pizza16 = await prisma.product.create({
    data: {
      name: 'Vier Jahreszeiten',
      description:
        'Extra Mozzarella, Schinken, pikante Peperoni, Fetawürfel, Tomaten, Champignons, italienische Kräuter, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d610ac6710c85d092845ce0342e.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.filter((ingredient) => [3, 4, 8].includes(ingredient.id)),
      },
    },
  });

  const pizza17 = await prisma.product.create({
    data: {
      name: 'Barbecue-Hähnchen',
      description:
        'Hähnchen, Bacon, Barbecuesoße, rote Zwiebeln, Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d610ac6710c85d092845ce0342e.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });
  const pizza18 = await prisma.product.create({
    data: {
      name: 'Hähnchen-Ranch',
      description:
        'Hähnchen, Schinken, Ranch-Soße, Mozzarella, Tomaten, Knoblauch, hauseigene Alfredo-Soße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ef4fedf286fd09b2d9f493cb4abc30.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });
  const pizza19 = await prisma.product.create({
    data: {
      name: 'Margherita',
      description: 'Extra Mozzarella, Tomaten, italienische Kräuter, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61067e771497808be0b32c6c99.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });
  const pizza20 = await prisma.product.create({
    data: {
      name: 'Diablo',
      description:
        'Scharfe Chorizo-Würstchen, scharfe Jalapeños, BBQ-Soße, Rindfleisch-Meatballs, Tomaten, süße Paprika, rote Zwiebeln, Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d614a748ef5921b5db309412ec5.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });
  const pizza21 = await prisma.product.create({
    data: {
      name: 'BBQ-Würstchen',
      description:
        'Scharfe Chorizo-Würstchen, scharfe Jalapeños, BBQ-Soße, Rindfleisch-Meatballs, Tomaten, süße Paprika, rote Zwiebeln, Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61515a13f1aca2c5ee2a8d51de.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });
  const pizza22 = await prisma.product.create({
    data: {
      name: 'BBQ-Würstchen',
      description:
        'Scharfe Chorizo-Würstchen, scharfe Jalapeños, BBQ-Soße, Rindfleisch-Meatballs, Tomaten, süße Paprika, rote Zwiebeln, Mozzarella, hauseigene Tomatensoße',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61515a13f1aca2c5ee2a8d51de.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 60),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
        price: 6.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/pepironi-fresh/11ee7d612f98bc0ea828957caff9c8ec.webp',
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
        price: 8.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/pepironi-fresh/11ee7d612ff49f2c98064fb647c3aa86.webp',
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
        price: 12.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/pepironi-fresh/11ee7d61304faf5a98a6958f2bb2d260.webp',
      }),

      // Пицца "Сырная"
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
        price: 5.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610cf7e265b7c72be5ae757ca7.png',
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
        price: 7.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610d2925109ab2e1c92cc5383c.png',
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
        price: 11.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610d91679bb519f38c3f45880f.png',
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
        price: 6.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610d5dbb14a551b640b90776fc.png',
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
        price: 8.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610d5dbb14a551b640b90776fc.png',
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
        price: 12.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/kasePizza/11ee7d610dbefef68ade96df563888b4.png',
      }),

      // Пицца "Чоризо фреш"
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
        price: 9.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/chorizo/11ee7d61703f8b47b1e4933820a7d91f.png',
      }),
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
        price: 12.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/chorizo/11ee7d61709f9f34a0b85f25ecdb286d.png',
      }),
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
        price: 15.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/chorizo/11ee7d6171059e7d8d5af72d04721d66.png',
      }),

      ///

      generateProductItem({
        productId: pizza4.id,
        pizzaType: 1,
        size: 20,
        price: 6.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleisch-Mix/0194d4f62142707eaebe3a3402a63ddc.png',
      }),
      generateProductItem({
        productId: pizza4.id,
        pizzaType: 1,
        size: 30,
        price: 8.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleisch-Mix/0194d4f6904975a5a6427e297591980d.png',
      }),
      generateProductItem({
        productId: pizza4.id,
        pizzaType: 1,
        size: 40,
        price: 10.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleisch-Mix/0194d4f6b569714c81b4699dcda65116.png',
      }),
      generateProductItem({
        productId: pizza4.id,
        pizzaType: 2,
        size: 30,
        price: 8.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleisch-Mix/0194d4f6a6f07488bea1dcb9340e3495.png',
      }),
      generateProductItem({
        productId: pizza4.id,
        pizzaType: 2,
        size: 40,
        price: 10.99,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleisch-Mix/0194d4f6bbc67215a6c489e31f9b3f1c.png',
      }),

      generateProductItem({
        productId: pizza5.id,
        pizzaType: 1,
        size: 20,
        price: 5.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/B%C5%93uf%20Stroganoff/0194d4f7e5857154afca068cdf307e05.png',
      }),

      generateProductItem({
        productId: pizza5.id,
        pizzaType: 1,
        size: 30,
        price: 8.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/B%C5%93uf%20Stroganoff/0194d4f7ee96785e8dbe7a41a8c330ee.png',
      }),

      generateProductItem({
        productId: pizza5.id,
        pizzaType: 1,
        size: 40,
        price: 10.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/B%C5%93uf%20Stroganoff/0194d4f845ab7620a03f83561d2bfe29.png',
      }),

      generateProductItem({
        productId: pizza5.id,
        pizzaType: 2,
        size: 30,
        price: 8.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/B%C5%93uf%20Stroganoff/0194d4f7f44c755c9f7b732fc9d206df.png',
      }),

      generateProductItem({
        productId: pizza5.id,
        pizzaType: 2,
        size: 40,
        price: 10.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/B%C5%93uf%20Stroganoff/0194d4f84c22791faa0d5670e4f3f5ac.png',
      }),

      generateProductItem({
        productId: pizza6.id,
        pizzaType: 1,
        size: 20,
        price: 5.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleischpizza%20mit%20Adschika/0194d4fa592670f083dc463c30065395.png',
      }),

      generateProductItem({
        productId: pizza6.id,
        pizzaType: 1,
        size: 30,
        price: 8.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleischpizza%20mit%20Adschika/0194d4fa65f277598a143a7ba341da53.png',
      }),

      generateProductItem({
        productId: pizza6.id,
        pizzaType: 1,
        size: 40,
        price: 10.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleischpizza%20mit%20Adschika/0194d4fa77a378ea95d903a473186173.png',
      }),

      generateProductItem({
        productId: pizza6.id,
        pizzaType: 2,
        size: 30,
        price: 8.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleischpizza%20mit%20Adschika/0194d4fa6f1c77009ee617ea9e2d126b.png',
      }),
      generateProductItem({
        productId: pizza6.id,
        pizzaType: 2,
        size: 40,
        price: 10.49,
        imageUrl:
          'https://raw.githubusercontent.com/Tenebran/project-assets/refs/heads/master/next%20dodo/pizza/Fleischpizza%20mit%20Adschika/0194d4fa7e447905be80fc6044b81c9d.png',
      }),

      generateProductItem({
        productId: pizza7.id,
        pizzaType: 1,
        size: 20,
        price: 6.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/0194d4fd22cb74c1bff42c8552f6e0a0.png',
      }),
      generateProductItem({
        productId: pizza7.id,
        pizzaType: 1,
        size: 30,
        price: 9.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/0194d4fd39bb7352bfa5de2219e88b9b.png',
      }),
      generateProductItem({
        productId: pizza7.id,
        pizzaType: 1,
        size: 40,
        price: 11.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/0194d4fd4ba4798887defbdb3bc48750.png',
      }),

      generateProductItem({
        productId: pizza7.id,
        pizzaType: 2,
        size: 30,
        price: 9.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/0194d4fd4065748ca6195656951081e0.png',
      }),
      generateProductItem({
        productId: pizza7.id,
        pizzaType: 2,
        size: 30,
        price: 11.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/0194d4fd5264795e9ead873595b79062.png',
      }),
      generateProductItem({
        productId: pizza8.id,
        pizzaType: 1,
        size: 20,
        price: 4.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614c92fba9a7c5f124c809fe88.png',
      }),
      generateProductItem({
        productId: pizza8.id,
        pizzaType: 1,
        size: 30,
        price: 7.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.png',
      }),
      generateProductItem({
        productId: pizza8.id,
        pizzaType: 1,
        size: 40,
        price: 8.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614d1bb6cb8ded93790d79e466.png',
      }),
      generateProductItem({
        productId: pizza8.id,
        pizzaType: 2,
        size: 30,
        price: 7.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614ce7d88391642fe26ecb2245.png',
      }),
      generateProductItem({
        productId: pizza8.id,
        pizzaType: 2,
        size: 40,
        price: 8.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614d572a8e844206649c75c132.png',
      }),
      generateProductItem({
        productId: pizza9.id,
        pizzaType: 1,
        size: 20,
        price: 4.79,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d60fd0c652e824db2e99c8ca4bd.png',
      }),
      generateProductItem({
        productId: pizza9.id,
        pizzaType: 1,
        size: 30,
        price: 7.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d60fda22358ac33c6a44eb093a2.png',
      }),
      generateProductItem({
        productId: pizza9.id,
        pizzaType: 1,
        size: 40,
        price: 8.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d60fdfc92f19d5a6c8dee6ddb9b.png',
      }),
      generateProductItem({
        productId: pizza9.id,
        pizzaType: 2,
        size: 30,
        price: 7.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d60fdce8a11955760fe05b45e23.png',
      }),
      generateProductItem({
        productId: pizza9.id,
        pizzaType: 2,
        size: 40,
        price: 8.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d60fe254005a3e82e36c1a6b6dd.png',
      }),
      generateProductItem({
        productId: pizza10.id,
        pizzaType: 1,
        size: 20,
        price: 5.19,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611f62c45b81e28c4c8b57a356.png',
      }),
      generateProductItem({
        productId: pizza10.id,
        pizzaType: 1,
        size: 30,
        price: 7.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef5b10b39bbbbda9f8c4e4ff1b067c.png',
      }),
      generateProductItem({
        productId: pizza10.id,
        pizzaType: 1,
        size: 40,
        price: 9.89,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611ff4e070bc833c66d67f2e44.png',
      }),
      generateProductItem({
        productId: pizza10.id,
        pizzaType: 2,
        size: 30,
        price: 7.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef5b10b4f3f53a86693b1614a719e7.png',
      }),
      generateProductItem({
        productId: pizza10.id,
        pizzaType: 2,
        size: 40,
        price: 9.89,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d612021428999227f0b5fbb5b40.png',
      }),
      generateProductItem({
        productId: pizza11.id,
        pizzaType: 1,
        size: 20,
        price: 6.19,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61758c90979be0f53b4ceee056.png',
      }),
      generateProductItem({
        productId: pizza11.id,
        pizzaType: 1,
        size: 30,
        price: 9.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.png',
      }),
      generateProductItem({
        productId: pizza11.id,
        pizzaType: 1,
        size: 40,
        price: 10.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61762b28a4adbcb9a502d3e644.png',
      }),
      generateProductItem({
        productId: pizza11.id,
        pizzaType: 2,
        size: 30,
        price: 9.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6175f4c285aa554ae6c88d06ec.png',
      }),
      generateProductItem({
        productId: pizza11.id,
        pizzaType: 2,
        size: 40,
        price: 10.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d617658a79b8d0e5bc85a380c91.png',
      }),
      generateProductItem({
        productId: pizza12.id,
        pizzaType: 1,
        size: 20,
        price: 6.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6108b7b5ddada9508b8ae5a913.png',
      }),
      generateProductItem({
        productId: pizza12.id,
        pizzaType: 1,
        size: 30,
        price: 9.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6108e3a1c9952cd3a7f39a4d02.png',
      }),
      generateProductItem({
        productId: pizza12.id,
        pizzaType: 1,
        size: 40,
        price: 10.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61095e56e6bbc9d410f89df983.png',
      }),
      generateProductItem({
        productId: pizza12.id,
        pizzaType: 2,
        size: 30,
        price: 9.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610925d43a9543f2c40f03ae5f.png',
      }),
      generateProductItem({
        productId: pizza12.id,
        pizzaType: 2,
        size: 40,
        price: 10.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61098938f2bdceeff8ca3fc1c9.png',
      }),
      generateProductItem({
        productId: pizza13.id,
        pizzaType: 1,
        size: 20,
        price: 5.59,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61695b5258971b45b8ca6c4301.png',
      }),
      generateProductItem({
        productId: pizza13.id,
        pizzaType: 1,
        size: 30,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.png',
      }),
      generateProductItem({
        productId: pizza13.id,
        pizzaType: 1,
        size: 40,
        price: 10.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6169f149548af85880d7f1e053.png',
      }),
      generateProductItem({
        productId: pizza13.id,
        pizzaType: 2,
        size: 30,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6169ba5ec3912f23a0131701ce.png',
      }),
      generateProductItem({
        productId: pizza13.id,
        pizzaType: 2,
        size: 40,
        price: 10.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d616a26862b8825cfce83d98f7c.png',
      }),
      generateProductItem({
        productId: pizza14.id,
        pizzaType: 1,
        size: 20,
        price: 5.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d617e6556a6bb1c37aa8de36ae5.png',
      }),
      generateProductItem({
        productId: pizza14.id,
        pizzaType: 1,
        size: 30,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d617e9339cfb185921a343ad8fd.png',
      }),
      generateProductItem({
        productId: pizza14.id,
        pizzaType: 1,
        size: 40,
        price: 9.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d617ef504b8b95c614b0eeaaafb.png',
      }),
      generateProductItem({
        productId: pizza14.id,
        pizzaType: 2,
        size: 30,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d617ec5b908a4ada0c2dac97a4d.png',
      }),
      generateProductItem({
        productId: pizza14.id,
        pizzaType: 2,
        size: 40,
        price: 10.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d617f240ef79b3ed9d1ec47b81d.png',
      }),
      generateProductItem({
        productId: pizza15.id,
        pizzaType: 1,
        size: 20,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610a2e0b10aa10de302b871250.png',
      }),
      generateProductItem({
        productId: pizza15.id,
        pizzaType: 1,
        size: 30,
        price: 11.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610a62d78598406363a9a8ad65.png',
      }),
      generateProductItem({
        productId: pizza15.id,
        pizzaType: 1,
        size: 40,
        price: 13.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610ac6710c85d092845ce0342e.png',
      }),
      generateProductItem({
        productId: pizza15.id,
        pizzaType: 2,
        size: 30,
        price: 11.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610a9501d4be1928e798217bfd.png',
      }),
      generateProductItem({
        productId: pizza15.id,
        pizzaType: 2,
        size: 40,
        price: 13.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610afae2c284cbe698a8387ac5.png',
      }),
      generateProductItem({
        productId: pizza16.id,
        pizzaType: 1,
        size: 20,
        price: 5.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611aaf7f47838d95e0c0004ccc.png',
      }),
      generateProductItem({
        productId: pizza16.id,
        pizzaType: 1,
        size: 30,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611adf5aad898b8b651186e023.png',
      }),
      generateProductItem({
        productId: pizza16.id,
        pizzaType: 1,
        size: 40,
        price: 10.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611b42752e8b4a68b50d980cde.png',
      }),
      generateProductItem({
        productId: pizza16.id,
        pizzaType: 2,
        size: 30,
        price: 8.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611adf5aad898b8b651186e023.png',
      }),
      generateProductItem({
        productId: pizza16.id,
        pizzaType: 2,
        size: 40,
        price: 10.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d611b42752e8b4a68b50d980cde.png',
      }),
      generateProductItem({
        productId: pizza17.id,
        pizzaType: 1,
        size: 20,
        price: 6.79,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610fd1960296609bc2946d660e.png',
      }),
      generateProductItem({
        productId: pizza17.id,
        pizzaType: 1,
        size: 30,
        price: 10.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6110059795842d40396bcf1e73.png',
      }),
      generateProductItem({
        productId: pizza17.id,
        pizzaType: 1,
        size: 40,
        price: 11.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61106c12ff8350c8d5d40e9309.png',
      }),
      generateProductItem({
        productId: pizza17.id,
        pizzaType: 2,
        size: 30,
        price: 10.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61103e8ecfa6c52919e4f61b83.png',
      }),
      generateProductItem({
        productId: pizza17.id,
        pizzaType: 2,
        size: 40,
        price: 11.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61109aac3ca2549394e61e3812.png',
      }),
      generateProductItem({
        productId: pizza18.id,
        pizzaType: 1,
        size: 20,
        price: 6.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef4fedd776d28ea93b6bf621e5efbc.png',
      }),
      generateProductItem({
        productId: pizza18.id,
        pizzaType: 1,
        size: 30,
        price: 10.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef4feddf588b4ea7493ba40fdf934c.png',
      }),
      generateProductItem({
        productId: pizza18.id,
        pizzaType: 1,
        size: 40,
        price: 11.79,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef4fedeada20d0b5dff20d0014d93d.png',
      }),
      generateProductItem({
        productId: pizza18.id,
        pizzaType: 2,
        size: 30,
        price: 10.09,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef4fede4be274e812a9dbe3a13ae1d.png',
      }),
      generateProductItem({
        productId: pizza18.id,
        pizzaType: 2,
        size: 30,
        price: 11.79,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ef4fedf286fd09b2d9f493cb4abc30.png',
      }),
      generateProductItem({
        productId: pizza19.id,
        pizzaType: 1,
        size: 20,
        price: 5.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6105bbfc3aa9734180aba7f61b.png',
      }),
      generateProductItem({
        productId: pizza19.id,
        pizzaType: 1,
        size: 30,
        price: 7.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.png',
      }),
      generateProductItem({
        productId: pizza19.id,
        pizzaType: 1,
        size: 40,
        price: 9.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d610649f9a898c96ee96fea37a5.png',
      }),
      generateProductItem({
        productId: pizza19.id,
        pizzaType: 2,
        size: 30,
        price: 7.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61061cdd79b1272df775ba4772.png',
      }),
      generateProductItem({
        productId: pizza19.id,
        pizzaType: 2,
        size: 40,
        price: 9.69,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61067e771497808be0b32c6c99.png',
      }),
      generateProductItem({
        productId: pizza20.id,
        pizzaType: 1,
        size: 20,
        price: 6.79,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6149b3d37bbfcc595a0ea60fd1.png',
      }),
      generateProductItem({
        productId: pizza20.id,
        pizzaType: 1,
        size: 30,
        price: 10.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6149eb101d8727573088fa2eff.png',
      }),
      generateProductItem({
        productId: pizza20.id,
        pizzaType: 1,
        size: 40,
        price: 11.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614a46a625ae3fd9ee995314bd.png',
      }),
      generateProductItem({
        productId: pizza20.id,
        pizzaType: 2,
        size: 30,
        price: 10.29,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614a19e0b78709039a09df7c2d.png',
      }),
      generateProductItem({
        productId: pizza20.id,
        pizzaType: 2,
        size: 40,
        price: 11.99,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d614a748ef5921b5db309412ec5.png',
      }),
      generateProductItem({
        productId: pizza21.id,
        pizzaType: 1,
        size: 20,
        price: 5.49,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6150a9426cb905492c1cc3f43d.png',
      }),
      generateProductItem({
        productId: pizza21.id,
        pizzaType: 1,
        size: 30,
        price: 8.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d6150d498419e133df19945a00d.png',
      }),
      generateProductItem({
        productId: pizza21.id,
        pizzaType: 1,
        size: 40,
        price: 10.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61512fa081a7a1f20647232e15.png',
      }),
      generateProductItem({
        productId: pizza21.id,
        pizzaType: 2,
        size: 30,
        price: 8.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61510131c1ae0c8bd2191f70db.png',
      }),
      generateProductItem({
        productId: pizza21.id,
        pizzaType: 2,
        size: 40,
        price: 10.39,
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11ee7d61515a13f1aca2c5ee2a8d51de.png',
      }),

      // Остальные продукты
      generateProductItem({ productId: 1, price: 5.99 }),
      generateProductItem({ productId: 2, price: 5.99 }),
      generateProductItem({ productId: 3, price: 2.99 }),
      generateProductItem({ productId: 4, price: 7.99 }),
      generateProductItem({ productId: 5, price: 5.99 }),
      generateProductItem({ productId: 6, price: 3.99 }),
      generateProductItem({ productId: 7, price: 9.99 }),
      generateProductItem({ productId: 8, price: 9.99 }),
      generateProductItem({ productId: 9, price: 5.99 }),
      generateProductItem({ productId: 10, price: 4.99 }),
      generateProductItem({ productId: 11, price: 4.99 }),
      generateProductItem({ productId: 12, price: 4.99 }),
      generateProductItem({ productId: 13, price: 4.99 }),
      generateProductItem({ productId: 14, price: 6.99 }),
      generateProductItem({ productId: 15, price: 6.99 }),
      generateProductItem({ productId: 16, price: 5.99 }),
      generateProductItem({ productId: 18, price: 5.99 }),
      generateProductItem({ productId: 19, price: 6.99 }),
      generateProductItem({ productId: 20, price: 9.99 }),
      generateProductItem({ productId: 21, price: 5.99 }),
      generateProductItem({ productId: 22, price: 3.99 }),
      generateProductItem({ productId: 23, price: 4.99 }),
      generateProductItem({ productId: 24, price: 6.99 }),
      generateProductItem({ productId: 25, price: 7.99 }),
      generateProductItem({ productId: 26, price: 7.99 }),
      generateProductItem({ productId: 27, price: 5.99 }),
      generateProductItem({ productId: 28, price: 5.99 }),
      generateProductItem({ productId: 29, price: 5.99 }),
      generateProductItem({ productId: 30, price: 5.99 }),
      generateProductItem({ productId: 31, price: 5.99 }),
      generateProductItem({ productId: 32, price: 5.99 }),
      generateProductItem({ productId: 33, price: 5.99 }),
      generateProductItem({ productId: 34, price: 5.99 }),
      generateProductItem({ productId: 35, price: 5.99 }),
      generateProductItem({ productId: 36, price: 5.99 }),
      generateProductItem({ productId: 37, price: 5.99 }),
      generateProductItem({ productId: 38, price: 5.99 }),
      generateProductItem({ productId: 39, price: 5.99 }),
      generateProductItem({ productId: 40, price: 5.99 }),
      generateProductItem({ productId: 41, price: 5.99 }),
      generateProductItem({ productId: 42, price: 5.99 }),
      generateProductItem({ productId: 43, price: 5.99 }),
      generateProductItem({ productId: 44, price: 5.99 }),
      generateProductItem({ productId: 45, price: 5.99 }),
      generateProductItem({ productId: 46, price: 5.99 }),
      generateProductItem({ productId: 47, price: 5.99 }),
      generateProductItem({ productId: 48, price: 5.99 }),
      generateProductItem({ productId: 49, price: 5.99 }),
      generateProductItem({ productId: 50, price: 5.99 }),
      generateProductItem({ productId: 51, price: 5.99 }),
      generateProductItem({ productId: 52, price: 5.99 }),
      generateProductItem({ productId: 53, price: 5.99 }),
      generateProductItem({ productId: 54, price: 5.99 }),
      generateProductItem({ productId: 55, price: 5.99 }),
      generateProductItem({ productId: 56, price: 5.99 }),
      generateProductItem({ productId: 57, price: 5.99 }),
      generateProductItem({ productId: 58, price: 5.99 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: '0',
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: '0',
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.story.createMany({
    data: story,
  });

  await prisma.storyItem.createMany({
    data: storyItems,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
