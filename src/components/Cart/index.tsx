import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react';
import { CartButton } from "../CartButton";
import { CartClose, CartContainer } from './styles';

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContainer>
          <CartClose>
            <X size={24} weight="bold"/>
          </CartClose>


          <h2>Sacola de Compras</h2>

          <section>
            <p>Parece que seu carrinho esta vazio :(</p>
          </section>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
