export default function handler(req, res) {
  const metadata = {
    name: "My NFT",
    description: "This is a Farcaster NFT",
    image: "https://example.com/nft-image.png"
  };

  res.status(200).json(metadata);
}
