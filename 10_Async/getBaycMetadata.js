// async/await 示例
async function getBaycMetadata() {
  let url = `https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1`
  let response = await fetch(url)
  let BaycMetadata = await response.json()
  console.log(BaycMetadata)
}
getBaycMetadata()
