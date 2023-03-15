import { styled } from "@/src/styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContainer = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '30rem',
    background: '$gray800',
    padding: '3rem',
    paddingTop: '4.5rem',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontWeight: 700,
        fontSize: '$lg,',
        color: '$gray100',
        marginBottom: '2rem'
    }

})

export const CartClose = styled(Dialog.Close, {
    background: 'none',
    border: 'none',
    color: '$gray500',
    position: 'absolute',
    top: '1.75rem',
    right: '1.75rem'
})