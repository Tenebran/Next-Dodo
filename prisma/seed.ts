import { Prisma } from '@prisma/client';
import { categories, _ingredients, products, story, storyItems } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const generateProductItem = ({
  productId,
  pizzaType,
  size,
  price,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
  price?: number;
}) => {
  return {
    productId,
    pizzaType,
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
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Käsepizza',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo Fresh',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20, price: 6.99 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30, price: 8.99 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40, price: 12.99 }),

      // Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20, price: 5.99 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30, price: 7.99 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40, price: 11.99 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20, price: 6.99 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30, price: 8.99 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40, price: 12.99 }),

      // Пицца "Чоризо фреш"
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20, price: 9.99 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30, price: 12.99 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40, price: 15.99 }),

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
      generateProductItem({ productId: 17, price: 5.99 }),
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
