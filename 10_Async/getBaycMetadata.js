// async/await 示例
async function getBaycMetadata() {
  const url = `https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1`
  const response = await fetch(url)
  const BaycMetadata = await response.json()
  console.log(BaycMetadata)
}
getBaycMetadata()
