import { CartContextProvider } from "@/components/cart/cartContext"

export default function App({ Component, pageProps }){
    return(
    <>
        <CartContextProvider>
            <Component {...pageProps}/>        
        </CartContextProvider>
    </>
    )
}