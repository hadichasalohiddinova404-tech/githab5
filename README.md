 Premium Web3 NFT DApp (4-Topshiriq)

Bu loyiha **NFT (ERC721)** yaratish va uni React asosidagi DApp orqali testnetga ulash uchun yaratilgan. Loyiha zamonaviy dizayn (Glassmorphism), mukammal UX va toza kod arxitekturasiga ega.

## Dastur Steklari (Tech Stack)
*   **Smart-Kontrakt**: Solidity `0.8.20`, OpenZeppelin (ERC721).
*   **Frontend**: Vite, React, CSS (Glassmorphism).
*   **Web3 Integratsiyasi**: Wagmi v2, Viem v2.
*   **Hamyon Ulanishi**: RainbowKit (MetaMask, Coinbase, WalletConnect).
*   **Tarmoq**: Sepolia Testnet.

## Foydalanish (Localhost)
1. Oldin kutubxonalarni yuklang: `npm install`
2. Ilovani ishga tushiring: `npm run dev`

## Smart-Kontrakt Deployments
Smart kontrakt `MyNFT.sol` nomi bilan yaratilgan. Uni Sepolia tarmog'iga yuklash uchun:
1. Loyiha papkasida `.env` faylini huddi `.env.example` dagi kabi to'ldiring:
```
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_ID
PRIVATE_KEY=your_private_key
```
2. Terminalda quyidagi buyruqni bering:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Loyihani Onlayn Chiqarish (Deployment)
Bu DApp'ni internetga qo'yish uchun **Vercel** eng yaxshi variant:
1. GitHub'ga kodni "push" qiling.
2. `Vercel.com` saytiga GitHub yordamida kiring.
3. Yangi loyiha qo'shishda ustiga bosing, `4_chi_topshiriq` repozitoriyasini tanlang va "Deploy" tugmasini bosing. Bo'ldi!
