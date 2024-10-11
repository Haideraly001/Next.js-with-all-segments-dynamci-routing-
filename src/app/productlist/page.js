import GettingEvents from "./pagewithevent";

export async function dataApi() {
  const data = await fetch("https://dummyjson.com/quotes");
  const setData = await data.json();
  return setData.quotes;
}


export async function ApiCall() {

  const isdata = await dataApi()
  console.log(isdata)

  return (
    <div>
      <h2>Quotes Api data</h2>
      {isdata.map((item) => {
        return (
          <div>
            <p>{item.quote}</p>
            <GettingEvents author={item.author} />
          </div>
        )
      })}
    </div>
  )
}

export default ApiCall
