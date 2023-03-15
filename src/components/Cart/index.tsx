import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContainer, CartProduct, CartProductDetails, CartProductImage } from "./styles";

export function Cart() {
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
            {/* <p>Parece que seu carrinho esta vazio :(</p> */}
            <CartProduct>
              <CartProductImage>
                <Image 
                  width={100}
                  height={93}
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1679875200&Signature=hlWlsObzwnvkQ2VIqyrTOgXlBVb84Dg77MNzVSEv~IhzVRYec4-vfYFwOPPzLiLDI7-P5CJvcfcoTG6Y0JlP9Nxo5LuVjqy7t4SuRyEK7zKhFsm3mh~X6MJLXCHW4X38wxb~i0mOolX3dt3H9ipbZwfwNmuwJ-4uPvNCD863igtHvhyonUnydbb9cS1fL5LtKu-rUFGBd~c5uF13GfgzmuRDNFK1MDS8~NNs3r1StAq9Xhz6J7xQ6qMIW0o86gsj44pKaMzp1CuxYRm90ZXyGR3pW5c7vazqZpgtxppeEJ~SonSIhd08K2rERL-Pxky63MHUG-2b~7fQ3R-hyA8-1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </CartProductImage>
              <CartProductDetails>
                  <p>Produto 1</p>
                  <strong>R$50,00</strong>
                  <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
