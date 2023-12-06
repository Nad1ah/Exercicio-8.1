export async function fetchData() {
  const result = await fetch("http://my-orders-url.com/orders");

  return await result.json();
}
