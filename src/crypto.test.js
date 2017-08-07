import crypto from './crypto'

const keys = [
  {
    address: "Adc4jT59RjDLdXbBni6xzg6SEcLVhHZ5Z9",
    publicKey: "02963fc761eb7135c4593bfc6a0af96d8588b70d8f6ef3af8549181e57772181f5",
    privateKey: "a7b9775c6b9136bf89f63def7eab0c5f2d3d0c9e85492717f54386420cce5aa1",
    WIFkey: "L2qkBc4ogTZERR4Watg4QoQq37w8fxrVZkYrPk7ZZSoRUZsr9yML"
  },
  {
    address: "ARCvt1d5qAGzcHqJCWA2MxvhTLQDb9dvjQ",
    publicKey: "03c663ba46afa8349f020eb9e8f9e1dc1c8e877b9d239e139af699049126e0f321",
    privateKey: "4f0d41eda93941d106d4a26cc90b4b4fddc0e03b396ac94eb439c5d9e0cd6548",
    WIFkey: "KysNqEuLb3wmZJ6PsxbA9Bh6ewTybEda4dEiN9X7X48dJPkLWZ5a"
  },
  {
    address: "AYYrr4GauveRr45WwAJyw6izvEMvasBBXH",
    publicKey: "02c1a9b2d0580902a6c2d09a8febd0a7a13518a9a61d08183f09ff929b66ac7c26",
    privateKey: "793466a3dfe3935a475d02290e37000a3e835f6740f9733e72e979d6e1166e13",
    WIFkey: "L1HKLWratxFhX94XSn98JEULQYKGhRycf4nREe3Cs8EPQStF5u9E"
  },
]

it("getPubFromHex", () => {
  keys.map((keyPair) => {
    let pub = crypto.getPubFromHex(keyPair.privateKey)
    expect(pub).toBe(keyPair.publicKey)
  })
})

it("getWifFromHex", () => {
  keys.map((keyPair) => {
    let wif = crypto.getWifFromHex(keyPair.privateKey)
    expect(wif).toBe(keyPair.WIFkey)
  })
})

it("getHexFromWif", () => {
  keys.map((keyPair) => {
    let hex = crypto.getHexFromWif(keyPair.WIFkey)
    expect(hex).toBe(keyPair.privateKey)
  })
})

it("getAddrFromPri", () => {
  keys.map((keyPair) => {
    let addr = crypto.getAddrFromPri(keyPair.privateKey)
    expect(addr).toBe(keyPair.address)
  })
})

it("genPriKey", () => {
  const key = crypto.genPriKey()
  expect(key.length).toBe(64)
})
