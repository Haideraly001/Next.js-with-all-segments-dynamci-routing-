// const productList = fetch("https://dummyjson.com/products")
//   .then(resp => {
//     return resp.json()
//   }).then(data => {
//     return data.products
//   })

// console.log(productList);



async function productlist() {
  const productList = await fetch("https://dummyjson.com/products")
  const data = await productList.json()
  return data.products
}

export async function page() {
  const data = await productlist()
  // console.log(data);



  return (
    <div>
      <h3>product Api</h3>
      {
        data.map((item) => {
          return <h3 key={item.id}>Name :{item.title}</h3>
        })
      }
    </div>
  )
}

export default page
