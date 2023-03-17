import { useCart } from "@/src/hooks/useCart";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { CartButton } from "../CartButton";
import {
  CartClose,
  CartContainer,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from "./styles";

export function Cart() {
  const { cartItems, removeCartItem, cartTotal } = useCart();

  const cartQuantity = cartItems.length;

  const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal);

  const [isCreatingCheckotSession, setIsCreatingCheckotSession] =
    useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckotSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckotSession(false);
      alert("falha ao redirecionar ao checkout");
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContainer>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de Compras</h2>

          <section>
            {cartQuantity <= 0 && <p>Parece que seu carrinho esta vazio :(</p>}

            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    alt=""
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeCartItem(cartItem.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </FinalizationDetails>
            <button
              onClick={handleCheckout}
              disabled={isCreatingCheckotSession || cartQuantity <= 0}
            >
              Finalizar Compra
            </button>
          </CartFinalization>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
