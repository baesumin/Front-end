import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const productData: Prisma.productsCreateInput[] = Array.apply(
  null,
  Array(100)
).map((_, index) => ({
  name: `Dark Jean ${index + 1}`,
  category_id: Math.ceil(Math.random() * 5),
  contents: `{"blocks":[{"key":"15glt","text":"This is Dark Jean ${
    index + 1
  }","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":13,"length":4,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
  image_url: `https://source.unsplash.com/collection/${Math.ceil(
    Math.random() * 100
  )}`,
  price: Math.floor(Math.random() * (100000 - 20000) + 20000),
}))

async function main() {
  const CATEGORIES = ['Sneakers', 'T-Shirt', 'Pants', 'Cap', 'Hoodie']
  CATEGORIES.forEach(async (c, i) => {
    const product = await prisma.categories.upsert({
      where: {
        id: i + 1,
      },
      update: {
        name: c,
      },
      create: {
        name: c,
      },
    })
    console.log(`Upsert category id: ${product.id}`)
  })
  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })

    console.log(`created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })
