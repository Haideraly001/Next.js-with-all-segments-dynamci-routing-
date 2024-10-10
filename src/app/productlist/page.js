import Pagewithevent from "./pagewithevent.js"


async function serverSideData() {
  const data = await fetch("https://dummyjson.com/products")
  const productlist = await data.json()
  return productlist.products
}


export async function page() {
  const listOfProducts = await serverSideData()
  // console.log(listOfProducts);


  return (
    <div>
      <h3>product list form serverSide</h3>
      {listOfProducts.map((item) => {
        return (
          <div>
            <h4 key={item.id}> name :{item.title}</h4>
            <Pagewithevent price={item.price} category={item.category} />

          </div>
        )
      })}
    </div>
  )
}


export default page;